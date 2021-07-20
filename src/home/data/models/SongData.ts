//data returned by https://beatsaver.com/api/maps/by-hash/<insert-song-hash-here>

export default interface SongData{
    metadata: MetaData,
    stats: Stats,
    description:string,
    _id:string,
    key:string,
    name:string,
    uploader: Uploader,
    hash:string,
    uploaded:string,
    directDownload:string,
    downloadURL: string,
    coverURL:string
}

interface MetaData{
    difficulties:Difficulties,
    duration:number,
    automapper: any,
    characteristics: MapData[],

}
interface Stats{
    downloads: number,
    plays: number,
    downVotes: number,
    upVotes: number,
    heat: number,
    rating: number
}
interface MapData{
    difficulties: {
        easy: LevelMapData|null,
        expert: LevelMapData|null,
        expertPlus: LevelMapData|null,
        hard: LevelMapData|null,
        normal: LevelMapData|null
    },
    name: string
}

interface LevelMapData{
    bombs:number,
    duration:number,
    length:number,
    njs:number,
    njsOffset:number,
    notes:number,
    obstacles:number
}
interface Uploader{
    _id: string,
    username: string
}
interface Difficulties{
    easy: boolean,
    expert: boolean,
    expertPlus: boolean,
    hard: boolean,
    normal: boolean
}