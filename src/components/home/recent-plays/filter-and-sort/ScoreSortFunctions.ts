import Score from "../../../../data/models/ScoreData";
export enum SortCriteria{
    TIME_SET,SONG_NAME,SONG_AUTHOR,RANK,DIFFICULTY,LEVEL_AUTHOR,SCORE
}
export enum SortOrder{
    ASC=1,DESC=-1
}
export function sortBy(sortCriteria:SortCriteria){
    
    switch(sortCriteria){
        case SortCriteria.SONG_NAME:
            return sortBySongName;
        case SortCriteria.SONG_AUTHOR:
            return sortBySongAuthor;
        case SortCriteria.RANK:
            return sortByRank;
        case SortCriteria.DIFFICULTY:
            return sortByDifficulty;
        case SortCriteria.LEVEL_AUTHOR:
            return sortByLevelAuthor;
        case SortCriteria.SCORE:
            return sortByScore;
        case SortCriteria.TIME_SET:
            return sortByTime;
        

    }
}
const sortBySongName = (s1:Score, s2:Score) => (s1.songName > s2.songName) ? 1 : -1;
const sortBySongAuthor = (s1:Score, s2:Score) => (s1.songAuthorName > s2.songAuthorName) ? 1 : -1;
const sortByRank = (s1:Score, s2:Score) => (s1.rank > s2.rank) ? 1 : -1;
const sortByDifficulty = (s1:Score, s2:Score) => (s1.difficulty > s2.difficulty) ? 1 : -1;
const sortByLevelAuthor = (s1:Score, s2:Score) => (s1.levelAuthorName > s2.levelAuthorName) ? 1 : -1;
const sortByScore = (s1:Score, s2:Score) => (s1.score > s2.score) ? 1 : -1;
const sortByTime = (s1:Score, s2:Score) => (s1.timeSet > s2.timeSet) ? -1 : 1;