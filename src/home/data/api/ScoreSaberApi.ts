import axios from "axios";
import { useState, useCallback, useMemo, useEffect } from "react";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

enum FetchStatus{
  OK,LOADING,ERROR,NONE
}
interface ApiDataObj{
  playerData:PlayerData|undefined,
  scoresData:ScoresData|undefined,
  
}
//scoresaber data react hook fetches relevant player info from scoresaber API
export function SSDataHook(scoresaber_id:string):ApiDataObj{
    const [ssData,setSSData] = useState<ApiDataObj>(
      {playerData:undefined,scoresData:undefined});
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
      const fetchScores = async () => {
        try {
          setSSData({playerData:ssData.playerData,scoresData:ssData.scoresData});
          setLoading(true);
          const scoresResponse = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scores/recent/1');
          const playerResponse = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/full')
          
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

export function findPlayersByName(name:string){
  
}

