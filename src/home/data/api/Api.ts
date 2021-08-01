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
//scoresaber data react hook fetches relevant info from scoresaber API
export function SSDataHook(scoresaber_id:string):ApiDataObj{
    const [ssData,setSSData] = useState<ApiDataObj>(
      {playerData:undefined,scoresData:undefined});
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
      const fetchScores = async () => {
        try {
          setSSData({playerData:ssData.playerData,scoresData:ssData.scoresData});
          const scoresResponse = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scores/recent/1');
          const playerResponse = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/full')
          
          setSSData({playerData:playerResponse.data,scoresData:scoresResponse.data});
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchScores();
    }, [scoresaber_id]);
    
        return ssData

}



// export default function usePlayerContextValue(scoresaber_id:string): PlayerContextData {
//     console.log('Scoresaber_id to fetch is '+scoresaber_id)
//     const [playerData, setPlayerData] = useState<PlayerData>();
//     const [scoresData, setScoresData] = useState<ScoresData>();
//     const [isLoading, setIsLoading] = useState(false);
    
//     //fetch player data
//     const fetchPlayer = useCallback(() => {
//       setIsLoading(true);
//       fetch('https://new.scoresaber.com/api/player/'+scoresaber_id+'/full')
//         .then(response => response.json())
//         .then((fetchedPlayer) => {
//           setPlayerData(fetchedPlayer);
//           console.log('fetched player is ')
//           console.log(fetchedPlayer)
//         }).catch(err=>console.log(err))
//         .finally(() => {
//           setIsLoading(false);
//         })
//     }, [setPlayerData]);
    

//     //fetch all songs player has played
//     const fetchScores = useCallback(() => {
//       setIsLoading(true);
//       fetch('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scoresData/recent/1')
//         .then(response => response.json())
//         .then((fetchedScores) => {
//           setScoresData(fetchedScores);
//         }).catch(err=>{
//           console.log(err);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         })
//     }, [setScoresData]);



//     return useMemo(() => ({
//         playerData,
//         scoresData,
//         isLoading,
//         fetchPlayer,
//         fetchScores
//       }),[  playerData,
//         scoresData,
//         isLoading,
//         fetchPlayer,
//         fetchScores])
// }