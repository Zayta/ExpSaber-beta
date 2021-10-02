import { memo } from "react";
import styled from "styled-components";
import LoadingIndicator from "./../../../../common/Loading";
import useBeatSaverData from "./../../data/api/hooks/BeatSaverApi"
import { comboMultiplier, maxScorePerNote } from "./../../data/constants/Constants";
import Difficulty from "./../../data/models/Difficulty";
import Score from "./../../data/models/ScoreData";
import { LevelMapData} from "./../../data/models/SongData";
import PlaysLi from "./PlaysLi";
function PlaysLiHoc(props:PlaysLiHocProps) {
  const { status, data, error } = useBeatSaverData(props.score.songHash);
  const playedDiff = getDifficulty(props.score.difficultyRaw);
    
  if(!data||status === "loading"){
    return <LoadingIndicator/>
  }
  if(status === "error"){
    return <span>Error: {error}</span>
  }
  let lvlMapData;
  if(playedDiff){

    lvlMapData = findLvlMapData(data.versions[0].diffs,playedDiff);
    //fix unranked maps
    if(props.score.maxScore===0&&lvlMapData)
      props.score.maxScore=lvlMapData.notes*maxScorePerNote*comboMultiplier;
    }
  return <PlaysLi score = {props.score} songData = {data} lvlMapData = {lvlMapData} playedDiff={playedDiff}/>
      
}
//finds the lvl map data with the corresponding difficulty in array
function findLvlMapData(diffs:LevelMapData[], playedDiff:Difficulty):LevelMapData|undefined{
  
    return diffs.find(d=>d.difficulty===playedDiff)
}
//parses the difficulty level from data string
function getDifficulty(difficulty_str:string):Difficulty{
    difficulty_str = difficulty_str.toLowerCase().replace(' ','_').replace('-','_'); 
    if(difficulty_str.includes('plus'))
        return Difficulty.EXPERT_PLUS;
    if(difficulty_str.includes('expert'))
        return Difficulty.EXPERT;
    if(difficulty_str.includes('hard'))
        return Difficulty.HARD;
    if(difficulty_str.includes('normal'))
        return Difficulty.NORMAL;
    if(difficulty_str.includes('easy'))
        return Difficulty.EASY;


    return Difficulty.UNKNOWN;
}

interface PlaysLiHocProps{
    score:Score
}
export default memo(PlaysLiHoc);
