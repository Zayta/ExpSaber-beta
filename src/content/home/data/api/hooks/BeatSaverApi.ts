import axios from "axios";
import { useQuery} from "react-query";
import SongData from "../../models/SongData";
const beatsaverApiPrefix = "https://api.beatsaver.com/";

export async function fetchMapByHash (mapHash:string) {
  console.info("fetch song hash", mapHash);
  let { data } = await axios.get(await axios.get(beatsaverApiPrefix+"maps/hash/"+mapHash));
  
  await new Promise((r) => setTimeout(r, 1000));
  return data;
}

export default function useBeatSaverData(mapHash:string) {
  return useQuery<SongData,Error>(["map", mapHash], () => fetchMapByHash(mapHash),{ useErrorBoundary: true });
}
