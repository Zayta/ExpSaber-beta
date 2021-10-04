import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { useQuery} from "react-query";
import SongData from "../../models/SongData";
const beatsaverApiPrefix = "https://api.beatsaver.com/";

export async function fetchMapByHash (mapHash:string) {
  console.info("fetch song hash", mapHash);
  try{
    let { data } = await trackPromise(axios.get(beatsaverApiPrefix+"maps/hash/"+mapHash));
    
    await new Promise((r) => setTimeout(r, 1000));
    return data;
  }
  catch(err){
    console.log('error in fetching beatsaver data',err);
  }
}

export default function useBeatSaverData(mapHash:string) {
  return useQuery<SongData,Error>(["map", mapHash], () => fetchMapByHash(mapHash),{ useErrorBoundary: true });
}
