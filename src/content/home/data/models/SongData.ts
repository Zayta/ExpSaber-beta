//data returned by https://beatsaver.com/api/maps/by-hash/<insert-song-hash-here>

import MapLevel from "./MapLevel";

export default interface SongData{
    automapper:boolean,
    createdAt: Date,
    description:string,
    id:string,
    lastPublishedAt:string,
    metadata: MetaData,
    name:string,
    qualified:boolean,
    ranked:boolean,
    stats: Stats,
    updatedAt:Date,
    uploaded:Date,
    uploader:Uploader,
    versions: Version[]
}

interface MetaData{
    bpm:number,
    duration:number,
    levelAuthorName:string,
    songAuthorName:string,
    songName:string,
    songSubName:string
}
interface Stats{
    downloads: number,
    plays: number,
    downVotes: number,
    upVotes: number,
    score:number
}

interface Uploader{
    id: string,
    username: string,
    avatar:string,
    hash:string,
    name:string,
    type:string,
    uniqueSet:boolean

}

interface Version{
    coverURL:string,
    createdAt:Date,
    diffs:LevelMapData[],
    downloadURL:string,
    hash:string,
    key:string,
    previewURL:string,
    sageScore:number,
    state:String
}
export interface LevelMapData{
    bombs:number,
    characteristic:string,
    chroma:boolean,
    cinema:boolean,
    difficulty:MapLevel,
    events:number,
    length:number,
    me:boolean,
    ne:boolean, 
    njs:number,
    notes:number,
    nps:number,
    obstacles:number,
    offset:number,
    paritySummary:ParitySummary,
    seconds:number
}
interface ParitySummary{
    errors:number,
    resets:number,
    warns:number
}