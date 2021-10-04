import { memo } from "react";
import useBeatSaverData from "../../../data/api/hooks/BeatSaverApi"
import { comboMultiplier, maxScorePerNote } from "../../../data/constants/Constants";
import Difficulty from "../../../data/models/Difficulty";
import Score from "../../../data/models/ScoreData";
import { LevelMapData} from "../../../data/models/SongData";
import styled from "styled-components";
import MapDetails from "./map-details/MapDetails";
import MapActions from "./map-actions/MapActions";
import ScoreDetails from "./score-details/ScoreDetails";
import { Loader } from "react-feather";

const DetailsContainer = styled.div`
margin:0 10px;
display:flex;
justify-content:space-between;
`;
function Details(props:DetailsProps) {
  const { status, data, error } = useBeatSaverData(props.score.songHash);
  if(!data||status === "loading"){
    return <DetailsContainer><Loader/></DetailsContainer>
  }
  if(status === "error"||error){
      console.log(error)
    return <span>[No details available]</span>
  }
  let lvlMapData;
  if(props.playedDiff){

    lvlMapData = findLvlMapData(data.versions[0].diffs,props.playedDiff);
    //fix unranked maps
    if(props.score.maxScore===0&&lvlMapData)
      props.score.maxScore=lvlMapData.notes*maxScorePerNote*comboMultiplier;
    }
  return <DetailsContainer>
      <div>
            <MapActions songData = {data}/>
            
            <MapDetails songData={data} lvlMapData={lvlMapData}/>
           </div> 
            <ScoreDetails score = {props.score}/>
        </DetailsContainer>    
}
//finds the lvl map data with the corresponding difficulty in array
function findLvlMapData(diffs:LevelMapData[], playedDiff:Difficulty):LevelMapData|undefined{
  
    return diffs.find(d=>d.difficulty===playedDiff)
}

interface DetailsProps{
    score:Score,
    playedDiff:Difficulty
}
export default memo(Details);