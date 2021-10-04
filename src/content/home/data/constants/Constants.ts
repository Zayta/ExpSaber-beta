//this file contains constants to be used in the rest of the application
export const maxPages = 5;
export const numInitialLoadedMapData=8;

//in beat saber, each note is worth 115 points, with combo multiplier of (max) 8 
export const maxScorePerNote = 115;
export const comboMultiplier = 8;

//query
export const queryCacheStaleTime = 5*60*1000;

//beat saver urls
export const beatsaverMapPrefix = "https://beatsaver.com/maps/";
export const iconURL = "https://beatsaver.com/static/icons/";
export const mapCoverURL = "https://na.cdn.beatsaver.com/"//<append hash>
// score saber urls
export const avatarPrefix = 'https://new.scoresaber.com';
export const ssLeaderboardURL = 'https://scoresaber.com/leaderboard/';
export const ssWebProfilePrefix = 'https://scoresaber.com/u/';
