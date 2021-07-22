import { useState, useCallback, useMemo } from "react";
import { PlayerContextData,Player } from "../context/PlayerContext";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

export default function usePlayerContextValue(scoresaber_id:string): PlayerContextData {
    const [playerData, setPlayerData] = useState<PlayerData>();
    const [scoresData, setScoresData] = useState<ScoresData>();
    const [isLoading, setIsLoading] = useState(false);
    
    //fetch player data
    const fetchPlayer = useCallback(() => {
      setIsLoading(true);
      fetch('https://new.scoresaber.com/api/player/'+scoresaber_id+'/full')
        .then(response => response.json())
        .then((fetchedPlayer) => {
          setPlayerData(fetchedPlayer);
        }).catch(err=>console.log(err))
        .finally(() => {
          setIsLoading(false);
        })
    }, [setPlayerData]);
    

    //fetch all songs player has played
    const fetchScores = useCallback(() => {
      setIsLoading(true);
      fetch('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scores/recent/1')
        .then(response => response.json())
        .then((fetchedScores) => {
          setScoresData(fetchedScores);
        }).catch(err=>{
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }, [setScoresData]);



    return useMemo(() => ({
        playerData,
        scoresData,
        isLoading,
        fetchPlayer,
        fetchScores
      }),[  playerData,
        scoresData,
        isLoading,
        fetchPlayer,
        fetchScores])
}