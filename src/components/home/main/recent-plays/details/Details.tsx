import { memo } from "react";
import useBeatSaverData from "../../../../../data/api/hooks/BeatSaverApi"
import { comboMultiplier, maxScorePerNote } from "../../../../../config/Constants";
import Difficulty from "../../../../../data/models/Difficulty";
import Score from "../../../../../data/models/ScoreData";
import { LevelMapData} from "../../../../../data/models/SongData";
import styled from "styled-components";
import MapDetails from "./map-details/MapDetails";
import MapActions from "./map-actions/MapActions";
import ScoreDetails from "./score-details/ScoreDetails";
import { Loader } from "react-feather";

const DetailsContainer = styled.div`
padding:0 10px;
display:flex;
justify-content:space-between;
flex-flow:row wrap;
width:100%;
box-sizing:border-box;
`;
function Details(props:DetailsProps) {
  const { status, data, error } = useBeatSaverData(props.score.songHash);
  if(status === "loading"){
    return <DetailsContainer style = {{'justifyContent':'center'}}><Loader/></DetailsContainer>
  }
  if(status === "error"||error){
      
    return <span>[No details available]</span>
  }
  if(!data){return <div style = {{'fontSize':'0.5em'}}><DetailsContainer>[No details available]</DetailsContainer></div>}
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
