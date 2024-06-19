import { useSSScoresData } from "./api/hooks/ScoreSaberApi";
import { TrackerStat } from "./models/BeatSaviorData";
import SSScore from "./models/ScoreData";
import ScoreSortOrder from "./models/ScoreSortOrder";
import getMapDifficulty from "./parsers/DifficultyParser";
//hook that combines data from scoresaber api and beatsavior api
export function useScoresData(scoresaber_id:string, sortBy: ScoreSortOrder,numScores:number):SSScore[]|undefined{
    
  let ssScoresData:SSScore[]|undefined = useSSScoresData(scoresaber_id,sortBy,numScores);
  
  return ssScoresData;
}
//finds the first trackerstat that corresponds to the score
function findTrackerStat(score:SSScore,trackerStats:TrackerStat[]):TrackerStat|undefined{
    if(!trackerStats||!trackerStats.length){
        return undefined;
    }
    const filtered = trackerStats.filter(ts=>ts.songID===score.leaderboard.songHash&&getMapDifficulty(ts.songDifficulty)===getMapDifficulty(score.leaderboard.difficulty.difficultyRaw));
    if(!filtered.length)
        return undefined;
    return filtered[0];
}
