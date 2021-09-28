import axios from "axios";
import { useQuery} from "react-query";
const beatsaverApiPrefix = "https://api.beatsaver.com/"

const getMapByHash = async (mapHash:string) => {
  const { data } = await axios.get(beatsaverApiPrefix+"maps/hash/"+mapHash);
  return data;
};

export default function useBeatSaverData(mapHash:string) {
  return useQuery(["map", mapHash], () => getMapByHash(mapHash));
}
