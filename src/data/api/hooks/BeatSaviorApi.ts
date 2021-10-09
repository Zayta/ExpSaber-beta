import axios from "axios";
import { useQuery} from "react-query";
import { queryCacheStaleTime } from "../../../config";
import { TrackerStats } from "../../models/BeatSaviorData";
import queryClient from "../ClientProvider";
const myBeatSaviorApiPrefix = "https://my-saber-server.herokuapp.com/perf-info/";

export async function fetchBeatSaviorData (ssid:string) {
  console.info("fetch song hash", ssid);
  try{
    let { data } = await (axios.get(myBeatSaviorApiPrefix+ssid,{headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      
  'Access-Control-Allow-Methods':'GET',
    },
    responseType: "json"
  }));
    
    await new Promise((r) => setTimeout(r, 1000));
    return data;
  }
  catch(err){
    console.log('error in fetching BeatSavior data',err);
  }
}

export default function useBeatSaviorData(ssid:string):TrackerStats|undefined {
  const { isLoading, isError, error, data } = useQuery<TrackerStats,Error>(["trackerstats", ssid], () => fetchBeatSaviorData(ssid),{ useErrorBoundary: true,staleTime: queryCacheStaleTime  });
  if(isError){
    console.log(error)
    return undefined;
  }
  if(isLoading){
    console.log('loading')
  }
  return data;
}
export async function preFetchBeatSaviorData(ssid:string){
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery(["trackerstats", ssid], () => fetchBeatSaviorData(ssid),{staleTime: queryCacheStaleTime  })
}
