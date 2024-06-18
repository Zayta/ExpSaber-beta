import { TrackerStat } from "./BeatSaviorData";


//scoresaber score data that is returned from https://scoresaber.com/api/player/<scoresaber_id>/scores/recent/<page>
export default interface SSScore{
  score:ScoreInfo,
  leaderboard:LeaderboardInfo
}
interface ScoreInfo{
    
    id:number,
    rank:number,
    baseScore:number,
    modifiedScore:number,
    pp:number,
    weight:number,
    multipler:number,
    badCuts:number,
    missedNotes:number,
    maxCombo:number,
    fullCombo:boolean,
    timeSet:string
}
interface LeaderboardInfo{
    id:number,
    songHash:string,
    songName:string,
    songSubName:string,
    levelAuthorName:string,
    songAuthorName:string,
    difficulty:{
        difficulty:number,
        leaderboardId:number,
        difficultyRaw:string
    }
    
}
