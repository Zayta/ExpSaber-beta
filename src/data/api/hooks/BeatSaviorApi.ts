import axios from "axios";
import { useQuery} from "react-query";
import { queryCacheStaleTime } from "../../../config";
import { TrackerStats } from "../../models/BeatSaviorData";
import queryClient from "../ClientProvider";
const BeatSaviorApiPrefix = "https://www.beatsavior.io/api/livescores/player/";

export async function fetchBeatSaviorData (ssid:string) {
  console.info("fetch song hash", ssid);
  try{
    let { data } = await (axios.get(BeatSaviorApiPrefix+ssid));
    
    await new Promise((r) => setTimeout(r, 1000));
    return data;
  }
  catch(err){
    console.log('error in fetching BeatSavior data',err);
  }
}

export default function useBeatSaviorData(ssid:string) {
  return useQuery<TrackerStats,Error>(["trackerstats", ssid], () => fetchBeatSaviorData(ssid),{ useErrorBoundary: true,staleTime: queryCacheStaleTime  });
}
export async function preFetchBeatSaviorData(ssid:string){
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery(["trackerstats", ssid], () => fetchBeatSaviorData(ssid),{staleTime: queryCacheStaleTime  })
}
