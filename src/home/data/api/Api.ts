import axios from "axios";
import { useState, useCallback, useMemo, useEffect } from "react";
import { PlayerContextData,Player } from "../context/PlayerContext";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

enum FetchStatus{
  OK,LOADING,ERROR,NONE
}
interface ApiDataObj{
  playerData:PlayerData|undefined,
  scoresData:ScoresData|undefined,
  fetchStatus:FetchStatus
}

export function DataHook(scoresaber_id:string):ApiDataObj{
    const [ApiDataObj,setApiDataObj] = useState<ApiDataObj>(
      {playerData:undefined,scoresData:undefined,fetchStatus:FetchStatus.NONE});
    useEffect(() => {
      const fetchScores = async () => {
        try {
          setApiDataObj({playerData:ApiDataObj.playerData,scoresData:ApiDataObj.scoresData, fetchStatus:FetchStatus.LOADING});
          const scores:ScoresData = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scoresData/recent/1');
          const player:PlayerData = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/full')
          console.log('scores:')
          console.log(scores)
          console.log('player:')
          console.log(player)
          setApiDataObj({playerData:player,scoresData:scores, fetchStatus:FetchStatus.OK});
                
        }catch (exception) {
          console.log(exception);
          setApiDataObj({playerData:ApiDataObj.playerData,scoresData:ApiDataObj.scoresData, fetchStatus:FetchStatus.ERROR});
          
        }
       };
       fetchScores();
    }, []);
    
        return ApiDataObj

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