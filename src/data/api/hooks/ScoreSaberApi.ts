import axios from "axios";
import { useState, useEffect } from "react";
import { PlayerData, PlayerInfo } from "../../models/PlayerData";
import  Score from "../../models/ScoreData";
import { trackPromise } from 'react-promise-tracker';
import ScoreSortOrder from "../../models/ScoreSortOrder";

const ssPlayerApiEndptPrefix = 'https://new.scoresaber.com/api/player/';
const ssApiSearchPlayerEndpt = 'https://new.scoresaber.com/api/players/by-name/';


//scoresaber data react hook fetches relevant srer info from scoresaber API
//=================== Fetching Player General Info (name, country, rank, avatar, etc) ====================//
export function useSSPlayerData(scoresaber_id:string):PlayerData|undefined{
    const [ssPlayerData,setSSPlayerData] = useState<PlayerData>();
    
    useEffect(() => {
      const fetchScores = async () => {
        try {
          const userResponse = await trackPromise(axios.get(ssPlayerApiEndptPrefix+scoresaber_id+'/full'));
          setSSPlayerData(userResponse.data);
          
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchScores();
    }, [scoresaber_id]);
    
    return ssPlayerData

}

//======================== Fetching srer scores ========================//

export function useSSScoresData(scoresaber_id:string, sortBy: ScoreSortOrder,pages:number):Score[]|undefined{
  const [scoresData,setScoresData] = useState<Score[]>([]);

  useEffect(() => {
    if(!scoresaber_id){
      return;
    }
    const fetchScores = async () => {
      try {
        //create urls for scores of different pages
        let urls = []
        const base_sr_url = ssPlayerApiEndptPrefix+scoresaber_id+"/scores/"+sortBy+"/";
        for(let i = 1; i<=pages;i++){
            urls.push(base_sr_url+i);
        }
        let scoresResponse  = await Promise.all(urls.map(
            async url=>await trackPromise(axios.get(url).catch(err=>{console.log(err);}))));
            
        let scores:Score[] = [];
        scoresResponse.forEach(sr=>{
          if(sr&&sr.data&&sr.data.scores){
              scores = scores.concat(sr.data.scores);
              
          }
        });
        setScoresData(scores)

        // const scoresResponse = await axios.get(ssPlayerApiEndptPrefix+scoresaber_id+'/scores/'+sortBy+'/1');
            
      }catch (err) {
        console.log('Error:', err);
      }
     };
     fetchScores();
  }, [scoresaber_id,pages,sortBy]);
  
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
        const playersListResponse = await trackPromise(axios.get(ssApiSearchPlayerEndpt+name));
        
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

