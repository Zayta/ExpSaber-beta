import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import SongData from '../models/SongData'
const beatsaverApiPrefix = "https://api.beatsaver.com/"
export function BeatSaverDataHook(mapHash:string):SongData|undefined{
    const [songData,setSongData] = useState<SongData>();
    const [error, setError]: [string, (error: string) => void] = useState("");
  
    useEffect(() => {
      if(!mapHash){
        return;
      }
      const fetchSong = async () => {
        try {
          
          const songResponse = await axios.get(beatsaverApiPrefix+"maps/hash/"+mapHash);
          console.log('heavy op')
          console.log(songResponse);
          setSongData(songResponse.data);
              
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchSong();
    }, [mapHash]);
    
    return songData
  
  }