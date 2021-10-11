import { useEffect } from "react";
import useBeatSaviorData from "./api/hooks/BeatSaviorApi";
import { useSSScoresData } from "./api/hooks/ScoreSaberApi";
import { TrackerStat } from "./models/BeatSaviorData";
import Score from "./models/ScoreData";
import ScoreSortOrder from "./models/ScoreSortOrder";
import getMapDifficulty from "./parsers/DifficultyParser";
//hook that combines data from scoresaber api and beatsavior api
export function useScoresData(scoresaber_id:string, sortOrder: ScoreSortOrder,pages:number):Score[]|undefined{
    
  let ssScoresData:Score[]|undefined = useSSScoresData(scoresaber_id,sortOrder,pages);
  
  let bsaviorData:TrackerStat[]|undefined = useBeatSaviorData(scoresaber_id);
  
  useEffect(()=>{
    if(ssScoresData&&bsaviorData){
      ssScoresData.forEach(score=>{
        if(!bsaviorData)
          return;
        score.trackerStat=findTrackerStat(score,bsaviorData);
      })
    }
  },[bsaviorData,ssScoresData]);
  return ssScoresData;
}
//finds the first trackerstat that corresponds to the score
function findTrackerStat(score:Score,trackerStats:TrackerStat[]):TrackerStat|undefined{
    if(!trackerStats||!trackerStats.length){
        return undefined;
    }
    const filtered = trackerStats.filter(ts=>ts.songID===score.songHash&&getMapDifficulty(ts.songDifficulty)===getMapDifficulty(score.difficultyRaw));
    if(!filtered.length)
        return undefined;
    return filtered[0];
}
