import { TrackerStat } from "./BeatSaviorData";

export default interface Score extends SSScore{
    trackerStat:TrackerStat|undefined;
}
//scoresaber score data that is returned from https://new.scoresaber.com/api/player/<scoresaber_id>/scores/recent/<page>
interface SSScore{
    difficulty: number,
    difficultyRaw: string,
    leaderboardId: number,
    levelAuthorName: string,
    maxScore: number,
    mods: string,
    pp: number,
    rank: number,
    score: number,
    scoreId: number,
    songAuthorName: string,
    songHash: string,
    songName: string,
    songSubName: string,
    timeSet: string,
    unmodifiedScore: number,
    weight: number
}
