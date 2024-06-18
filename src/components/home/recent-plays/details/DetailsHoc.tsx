import { memo, useState } from "react";
import useBeatSaverData from "../../../../data/api/hooks/BeatSaverApi"
import { comboMultiplier, maxScorePerNote } from "../../../../config/static";
import Difficulty from "../../../../data/models/Difficulty";
import SSScore from "../../../../data/models/ScoreData";
import { LevelMapData} from "../../../../data/models/SongData";
import styled from "styled-components";
import MapDetails from "./map-details/MapDetails";
import MapActions from "./map-actions/MapActions";
import ScoreDetails from "./score-info/ScoreInfo";
import { Loader } from "react-feather";
import { mobileBreakpoint } from "../../../../config";
import AccuracyPerf from "./perf-details/AccuracyPerf";
import HitPerf from "./perf-details/HitPerf";
import GridPerf from "./perf-details/GridPerf";

const DetailsStyle = styled.div`
padding:10px;
display:flex;
justify-content:space-between;
flex-flow:row wrap;
width:100%;
box-sizing:border-box;
`;
const MapInfoStyle = styled.div`
@media only screen and (max-width: ${mobileBreakpoint}){
  width:100%;
  margin-bottom:10px;
  
}
`;
const PerfInfoStyle = styled.div`
  display:flex;
  flex-flow:column nowrap;

`;
function Details({score,playedDiff}:DetailsProps) {
  const [showPerf,setShowPerf] = useState<boolean>(false);
  function togglePerf(){setShowPerf(!showPerf)}

  const { status, data, error } = useBeatSaverData(score.songHash);
  if(status === "loading"){
    return <DetailsStyle style = {{'justifyContent':'center'}}><Loader/></DetailsStyle>
  }
  if(status === "error"||error){
      
    return <span>[No details available]</span>
  }
  if(!data){return <div style = {{'fontSize':'0.5em'}}><DetailsStyle>[No details available]</DetailsStyle></div>}
  let lvlMapData;
  if(playedDiff){

    lvlMapData = findLvlMapData(data.versions[0].diffs,playedDiff);
    //fix unranked maps by calculating max score
    if(score.maxScore===0&&lvlMapData){
      //https://www.reddit.com/r/beatsaber/comments/kswak5/how_to_calculate_the_highest_possible_score_of/
      //without multipliers
      //1 block = 115 => 1*115
      //next 4 blocks = 2*115 => 8*115
      //next 8 blocks = 4*115 => 32*115
      //afterwards all blocks = 8*115.
      score.maxScore=(lvlMapData.notes-13)*maxScorePerNote*comboMultiplier+ (1+8+32)*maxScorePerNote;
    }
  }
  return <DetailsStyle>
      <MapInfoStyle>
            <MapActions songData = {data}/>
            
            <MapDetails songData={data} lvlMapData={lvlMapData}/>
           </MapInfoStyle> 

            <div>
            <ScoreDetails score = {score} togglePerf={togglePerf}/>
            </div>
            
        {
            showPerf&&score.trackerStat && 
            <PerfInfoStyle>
            <AccuracyPerf accTracker={score.trackerStat.trackers.accuracyTracker}
            />
            <HitPerf hitTracker = {score.trackerStat.trackers.hitTracker}/>
            <GridPerf accTracker={score.trackerStat.trackers.accuracyTracker}/>
            </PerfInfoStyle>
        }
        </DetailsStyle>    
}
//finds the lvl map data with the corresponding difficulty in array
function findLvlMapData(diffs:LevelMapData[], playedDiff:Difficulty):LevelMapData|undefined{
  
    return diffs.find(d=>d.difficulty===playedDiff)
}

interface DetailsProps{
    score:SSScore,
    playedDiff:Difficulty
}
export default memo(Details);
