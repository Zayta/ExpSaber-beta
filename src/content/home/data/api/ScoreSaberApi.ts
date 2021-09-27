import axios from "axios";
import { useState, useCallback, useMemo, useEffect } from "react";
import { PlayerData, PlayerInfo } from "../models/PlayerData";
import ScoresData, { Score } from "../models/ScoreData";
import { trackPromise } from 'react-promise-tracker';
import ScoreSortOrder from "../models/ScoreSortOrder";

export const ssWebProfilePrefix = 'https://scoresaber.com/u/';
const ssPlayerApiEndptPrefix = 'https://new.scoresaber.com/api/player/';
const ssApiSearchPlayerEndpt = 'https://new.scoresaber.com/api/players/by-name/';
export const avatarPrefix = 'https://new.scoresaber.com';

//scoresaber data react hook fetches relevant srer info from scoresaber API
//=================== Fetching Player General Info (name, country, rank, avatar, etc) ====================//
export function SSPlayerDataHook(scoresaber_id:string):PlayerData|undefined{
    const [ssPlayerData,setSSPlayerData] = useState<PlayerData>();
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
      const fetchScores = async () => {
        try {
          const srerResponse = await axios.get(ssPlayerApiEndptPrefix+scoresaber_id+'/full');
          setSSPlayerData(srerResponse.data);
          
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchScores();
    }, [scoresaber_id]);
    
    return ssPlayerData

}

//======================== Fetching srer scores ========================//

export function ScoresDataHook(scoresaber_id:string, sortOrder: ScoreSortOrder,pages:number):ScoresData|undefined{
  const [scoresData,setScoresData] = useState<ScoresData>({scores:[]});
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    if(!scoresaber_id){
      return;
    }
    const fetchScores = async () => {
      try {
        //create urls for scores of different pages
        let urls = []
        const base_sr_url = ssPlayerApiEndptPrefix+scoresaber_id+"/scores/"+sortOrder+"/";
        for(let i = 1; i<=pages;i++){
            urls.push(base_sr_url+i);
        }
        let scoresResponse  = await Promise.all(urls.map(
            async url=>await axios.get(url)));
            
        let scores:Score[] = [];
        scoresResponse.forEach(sr=>{
          if(sr&&sr.data&&sr.data.scores){
              scores = scores.concat(sr.data.scores);
              
          }
        });
        setScoresData({scores:scores})

        // const scoresResponse = await axios.get(ssPlayerApiEndptPrefix+scoresaber_id+'/scores/'+sortOrder+'/1');
            
      }catch (err) {
        console.log('Error:', err);
      }
     };
     fetchScores();
  }, [scoresaber_id]);
  
  return scoresData

}


//============== Search Players by name list ============//
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

