import styled from "styled-components";
import LoadingIndicator from "../../../../../common/Loading";
import useBeatSaverData, { beatsaverMapPrefix } from "../../../data/api/hooks/BeatSaverApi";
import MapLevel from "../../../data/models/MapLevel";
import Score from "../../../data/models/ScoreData";
import { LevelMapData} from "../../../data/models/SongData";
import LevelInfo from "./map-details/LevelInfo";
import MapCreationInfo from "./map-details/MapCreationInfo";
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
const MapInfo=styled.div`
  display:flex;
  flex-direction:column;
  margin-left:10px;
  font-size:0.7em;
`;
function Details(props:DetailsProps) {
  const { status, data, error ,isFetching} = useBeatSaverData(props.score.songHash);
  
  return <div>
      {!data||status === "loading" ? (
        <LoadingIndicator/>
      ) : status === "error" ? (
        <span>Error: {error}</span>
      ) : (
        <DetailsContainer>
          <img id='cover' src ={data.versions[0].coverURL} alt = ""/>
          <MapInfo>

          map id: {data.id}
          <MapCreationInfo songData={data}/>

          {props.mapLvl?<LevelInfo map_data={findDiff(data.versions[0].diffs,props.mapLvl)}/>:<div/>}
          <a target = "_blank" href = {beatsaverMapPrefix+data.id}>View on BeatSaver</a>

          </MapInfo>
          <ScoreDetails score = {props.score}/>
          </DetailsContainer>
      )}
    </div>
}
//finds the first difficulty in array that matches mapLvl
function findDiff(diffs:LevelMapData[], mapLvl:MapLevel):LevelMapData|undefined{
  
    return diffs.find(d=>d.difficulty==mapLvl)
}
interface DetailsProps{
    score:Score
    mapLvl?:MapLevel
}
export default (Details);
