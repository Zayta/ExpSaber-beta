import axios from "axios";
import { useQuery} from "react-query";
import { queryCacheStaleTime } from "../../../config";
import SongData from "../../models/SongData";
import queryClient from "../ClientProvider";
const beatsaverApiPrefix = "https://api.beatsaver.com/";

export async function fetchMapByHash (mapHash:string) {
  console.info("fetch song hash", mapHash);
  try{
    let { data } = await (axios.get(beatsaverApiPrefix+"maps/hash/"+mapHash));
    
    await new Promise((r) => setTimeout(r, 1000));
    return data;
  }
  catch(err){
    console.log('error in fetching beatsaver data',err);
  }
}

export default function useBeatSaverData(mapHash:string) {
  return useQuery<SongData,Error>(["map", mapHash], () => fetchMapByHash(mapHash),{ useErrorBoundary: true,staleTime: queryCacheStaleTime  });
}
export async function preFetchBeatSaverData(mapHash:string){
  // The results of this query will be cached like a normal query
  return await queryClient.prefetchQuery(["map", mapHash], () => fetchMapByHash(mapHash))
}
