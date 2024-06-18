import axios from "axios";
import { useQuery} from "react-query";
import { queryCacheStaleTime } from "../../../config";
import { TrackerStat} from "../../models/BeatSaviorData";
import queryClient from "../ClientProvider";

const myBeatSaviorApiPrefix = "https://my-saber-server.herokuapp.com/perf-info/";

export async function fetchBeatSaviorData (id:string) {
  console.info("fetch song hash", id);
  try{
    let { data } = await (axios.get(myBeatSaviorApiPrefix+id,{headers: {
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

export default function useBeatSaviorData(id:string):TrackerStat[]|undefined {
  const { isLoading, isError, error, data } = useQuery<TrackerStat[],Error>(["trackerstats", id], () => fetchBeatSaviorData(id),{ useErrorBoundary: true,staleTime: queryCacheStaleTime  });
  if(isError){
    console.log(error)
    return undefined;
  }
  if(isLoading){
    console.log('loading')
  }
  return data;
}
export async function preFetchBeatSaviorData(id:string){
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery(["trackerstats", id], () => fetchBeatSaviorData(id),{staleTime: queryCacheStaleTime  })
}
