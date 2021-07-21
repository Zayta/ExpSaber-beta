import { useState, useCallback } from "react";
import { PlayerContextData,Player } from "../context/PlayerContext";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

export default function usePlayerContextValue(): PlayerContextData {
    const [playerData, setPlayerData] = useState<PlayerData>();
    const [scoresData, setScoresData] = useState<ScoresData>();
    const [isLoading, setIsLoading] = useState(false);

    //fetch player data
    const fetchPlayer = useCallback(() => {
      setIsLoading(true);
      fetch('https://new.scoresaber.com/api/player/76561198810679866/full')
        .then(response => response.json())
        .then((fetchedPlayer) => {
          setPlayerData(fetchedPlayer);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }, [setPlayerData]);
    

    //fetch all songs player has played
    const fetchScores = useCallback(() => {
      setIsLoading(true);
      fetch('https://new.scoresaber.com/api/player/76561198810679866/full')
        .then(response => response.json())
        .then((fetchedScores) => {
          setScoresData(fetchedScores);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }, [setScoresData]);



    return {
        playerData,
        scoresData,
        isLoading,
        fetchPlayer,
        fetchScores
      }
}