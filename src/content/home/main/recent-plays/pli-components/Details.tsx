import styled from "styled-components";
import LoadingIndicator from "../../../../../common/Loading";
import useBeatSaverData from "../../../data/api/hooks/BeatSaverApi"
import { comboMultiplier, maxScorePerNote } from "../../../data/constants/Constants";
import Difficulty from "../../../data/models/Difficulty";
import Score from "../../../data/models/ScoreData";
import { LevelMapData} from "../../../data/models/SongData";
import MapDetails from "./map-details/MapDetails";
import ScoreDetails from "./score-details/ScoreDetails";
const DetailsContainer = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    overflow-wrap:anywhere;
    height:fit-content;
    width:100%;
    h1,h2,h3,h4,h5,h6{
      font-size:0.7em;
      margin:0;
      color:white;
    }
`;
function Details(props:DetailsProps) {
  const { status, data, error } = useBeatSaverData(props.score.songHash);
  if(!data||status === "loading"){
    return <LoadingIndicator/>
  }
  if(status === "error"){
    return <span>Error: {error}</span>
  }
  let mapDiff;
  if(props.mapLvl){

    mapDiff = findDiff(data.versions[0].diffs,props.mapLvl);
    //fix unranked maps
    if(props.score.maxScore===0&&mapDiff)
      props.score.maxScore=mapDiff.notes*maxScorePerNote*comboMultiplier;
    }
  return <DetailsContainer>

          <MapDetails songData={data} mapDiff={mapDiff}/>
          
          <div>
            
          <ScoreDetails score = {props.score}/>
          </div>
          </DetailsContainer>
      
}
//finds the first difficulty in array that matches mapLvl
function findDiff(diffs:LevelMapData[], mapLvl:Difficulty):LevelMapData|undefined{
  
    return diffs.find(d=>d.difficulty===mapLvl)
}
interface DetailsProps{
    score:Score
    mapLvl?:Difficulty
}
export default (Details);
