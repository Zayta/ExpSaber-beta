import axios from "axios";
import { useState, useEffect } from "react";
import { PlayerInfo } from "../../models/PlayerData";
import  SSScore from "../../models/ScoreData";
import { trackPromise } from 'react-promise-tracker';
import ScoreSortOrder from "../../models/ScoreSortOrder";

const scoreSaberApi='https://scoresaber.com/api'


//scoresaber data react hook fetches relevant srer info from scoresaber API
//=================== Fetching Player General Info (name, country, rank, avatar, etc) ====================//
export function useSSPlayerInfo(scoresaber_id:string):PlayerInfo|undefined{
    const [ssPlayerInfo,setSSPlayerInfo] = useState<PlayerInfo>();
    
    useEffect(() => {
      const fetchScores = async () => {
        try {
          const userResponse = await trackPromise(axios.get(scoreSaberApi+'/player/'+scoresaber_id+'/full'));
          setSSPlayerInfo(userResponse.data);
          
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchScores();
    }, [scoresaber_id]);
    
    return ssPlayerInfo

}

//======================== Fetching urer scores ========================//

export function useSSScoresData(scoresaber_id:string, sortBy: ScoreSortOrder,numScores:number):SSScore[]|undefined{
  const [scoresData,setScoresData] = useState<SSScore[]>([]);

  useEffect(() => {
    if(!scoresaber_id){
      return;
    }
    const fetchScores = async () => {
      try {
        const url = scoreSaberApi+'/player/'+scoresaber_id+"/scores?sort="+sortBy+"&limit="+numScores;
console.log('url for scores is ',url)
        const scoresResponse  = await trackPromise(axios.get(url));
        console.log('scoresResponse is ',scoresResponse)

        setScoresData(scoresResponse.data.playerScores)

          
      }catch (err) {
        console.log('Error:', err);
      }
     };
     fetchScores();
  }, [scoresaber_id,numScores,sortBy]);

  console.log('in ss scores data, scoresdata is ',scoresData)
  
  return scoresData

}


//============== Search Players by name list ============//
interface PlayersList{
  playersList:{
    players:PlayerInfo[]
  }
}

export function usePlayerNameSearch(name:string):PlayersList{
  const [listData,setListData] = useState<PlayersList>({playersList:{players:[]}});
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

  useEffect(() => {
    if(!name){
      return;
    }
    const fetchScores = async () => {
      try {
        setLoading(true);
        const playersListResponse = await trackPromise(axios.get(scoreSaberApi+'/players?search='+name));
        
        setListData({playersList:playersListResponse.data});
        setLoading(false);
      }catch (err) {
        console.log('Error:', err);
      }
     };
     fetchScores();
  }, [name]);
  
  return listData

}

