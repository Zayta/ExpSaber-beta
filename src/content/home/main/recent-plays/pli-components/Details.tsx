import styled from "styled-components";
import LoadingIndicator from "../../../../../common/Loading";
import useBeatSaverData, { beatsaverMapPrefix } from "../../../data/api/hooks/BeatSaverApi";
import Difficulty from "../../../data/models/Difficulty";
import Score from "../../../data/models/ScoreData";
import { LevelMapData} from "../../../data/models/SongData";
import LevelInfo from "./map-details/LevelInfo";
import MapCreationInfo from "./map-details/MapCreationInfo";
import MapDetails from "./map-details/MapDetails";
import ScoreDetails from "./score-details/ScoreDetails";
const DetailsContainer = styled.div`
    display:flex;
    overflow-wrap:anywhere;
    height:fit-content;
    img#cover{
      max-width: 100%;
      max-height: 100%;
      width: 15vw;
      height: 15vw
    }
`;
function Details(props:DetailsProps) {
  const { status, data, error ,isFetching} = useBeatSaverData(props.score.songHash);
  if(!data||status === "loading"){
    return <LoadingIndicator/>
  }
  if(status === "error"){
    return <span>Error: {error}</span>
  }
  let mapDiff;
  if(props.mapLvl)
    mapDiff = findDiff(data.versions[0].diffs,props.mapLvl);
  return <DetailsContainer>

          <img id='cover' src ={data.versions[0].coverURL} alt = ""/>
          <MapDetails songData={data} mapDiff={mapDiff}/>
          <ScoreDetails score = {props.score}/>
          </DetailsContainer>
      
}
//finds the first difficulty in array that matches mapLvl
function findDiff(diffs:LevelMapData[], mapLvl:Difficulty):LevelMapData|undefined{
  
    return diffs.find(d=>d.difficulty==mapLvl)
}
interface DetailsProps{
    score:Score
    mapLvl?:Difficulty
}
export default (Details);
