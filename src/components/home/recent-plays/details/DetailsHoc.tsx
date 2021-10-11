import { memo } from "react";
import useBeatSaverData from "../../../../data/api/hooks/BeatSaverApi"
import { comboMultiplier, maxScorePerNote } from "../../../../config/static";
import Difficulty from "../../../../data/models/Difficulty";
import Score from "../../../../data/models/ScoreData";
import { LevelMapData} from "../../../../data/models/SongData";
import styled from "styled-components";
import MapDetails from "./map-details/MapDetails";
import MapActions from "./map-actions/MapActions";
import ScoreDetails from "./score-details/ScoreDetails";
import { Loader } from "react-feather";
import { mobileBreakpoint } from "../../../../config";

const DetailsContainer = styled.div`
padding:10px;
display:flex;
justify-content:space-between;
flex-flow:row wrap;
width:100%;
box-sizing:border-box;
`;
const MapInfoContainer = styled.div`
@media only screen and (max-width: ${mobileBreakpoint}){
  width:100%;
  margin-bottom:10px;
}
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
    //fix unranked maps by calculating max score
    if(props.score.maxScore===0&&lvlMapData){
      //https://www.reddit.com/r/beatsaber/comments/kswak5/how_to_calculate_the_highest_possible_score_of/
      //without multipliers
      //1 block = 115 => 1*115
      //next 4 blocks = 2*115 => 8*115
      //next 8 blocks = 4*115 => 32*115
      //afterwards all blocks = 8*115.
      props.score.maxScore=(lvlMapData.notes-13)*maxScorePerNote*comboMultiplier+ (1+8+32)*maxScorePerNote;
    }
  }
  return <DetailsContainer>
      <MapInfoContainer>
            <MapActions songData = {data}/>
            
            <MapDetails songData={data} lvlMapData={lvlMapData}/>
           </MapInfoContainer> 


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