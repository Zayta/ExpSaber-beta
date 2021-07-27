import axios from "axios";
import { useState, useCallback, useMemo, useEffect } from "react";
import { PlayerContextData,Player } from "../context/PlayerContext";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

enum FetchStatus{
  OK,LOADING,ERROR,NONE
}
interface FetchScoresObj{
  scoresData:ScoresData,
  fetchStatus:FetchStatus
}

function ScoresHook(scoresaber_id:string):ScoresData{
    const [fetchScoresObj,setFetchScoresObj] = useState<FetchScoresObj>(
      {scoresData:{scores:[]},fetchStatus:FetchStatus.NONE});
    useEffect(() => {
      const fetchScores = async () => {
        try {
          setFetchScoresObj({scoresData:fetchScoresObj.scoresData, fetchStatus:FetchStatus.LOADING});
          const response = await axios.get('https://new.scoresaber.com/api/player/'+scoresaber_id+'/scoresData/recent/1');
          setFetchScoresObj({scoresData:fetchScoresObj.scoresData, fetchStatus:FetchStatus.OK});
                
        }catch (exception) {
          console.log(exception);
          setFetchScoresObj({scoresData:fetchScoresObj.scoresData, fetchStatus:FetchStatus.ERROR});
        }
       };
       fetchScores();
    }, []);
    
        return fetchScoresObj.scoresData

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