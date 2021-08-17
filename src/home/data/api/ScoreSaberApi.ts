import axios from "axios";
import { useState, useCallback, useMemo, useEffect } from "react";
import { PlayerData, PlayerInfo } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";


interface PlayerApiDataObj{
  playerData:PlayerData|undefined,
  scoresData:ScoresData|undefined,
  
}
//scoresaber data react hook fetches relevant player info from scoresaber API
export function SSDataHook(scoresaber_id:string):PlayerApiDataObj{
    const [ssData,setSSData] = useState<PlayerApiDataObj>(
      {playerData:undefined,scoresData:undefined});
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
      const fetchScores = async () => {
        try {
          setSSData({playerData:ssData.playerData,scoresData:ssData.scoresData});
          setLoading(true);
          const playerResponse = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/full');
          const scoresResponse = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scores/recent/1');
          
          setSSData({playerData:playerResponse.data,scoresData:scoresResponse.data});
          setLoading(false);
        }catch (err) {
          setError(err);
          console.log('Error:', err);
        }
       };
       fetchScores();
    }, [scoresaber_id]);
    
    return ssData

}

interface PlayersList{
  playersList:{
    players:PlayerInfo[]
  }
}

export function PlayersByNameHook(name:string):PlayersList{
  const [listData,setListData] = useState<PlayersList>({playersList:{players:[]}});
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setLoading(true);
        const playersListResponse = await axios.get('https://new.scoresaber.com/api/players/by-name/'+name);
        
        setListData({playersList:playersListResponse.data});
        setLoading(false);
      }catch (err) {
        setError(err);
        console.log('Error:', err);
      }
     };
     fetchScores();
  }, [name]);
  
  return listData

}

