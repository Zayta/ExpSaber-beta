import { versions } from "process";
import { memo } from "react";
import styled from "styled-components";
import LoadingIndicator from "../../../../../common/Loading";
import useBeatSaverData from "../../../data/api/hooks/BeatSaverApi";
import MapLevel from "../../../data/models/MapLevel";
import { LevelMapData} from "../../../data/models/SongData";
const MapDetailsContainer = styled.div`
    display:flex;
    overflow-wrap:anywhere;
`;
function MapDetails(props:MapDetailsProps) {
  const { status, data, error ,isFetching} = useBeatSaverData(props.mapHash);
  console.log('version')
  console.log(data?.versions)
  return <MapDetailsContainer>
            <div>
        
      {!data||status === "loading" ? (
        <LoadingIndicator/>
      ) : status === "error" ? (
        <span>Error: {error}</span>
      ) : (
        <>
          <img src ={data.versions[0].coverURL} alt = ""/>

          {props.mapLvl?renderMapSubInfo(findDiff(data.versions[0].diffs,props.mapLvl)):<div/>}
        </>
      )}
    </div>
  </MapDetailsContainer>
}
const renderMapSubInfo = (map_data:LevelMapData|undefined) =>{
    console.log(map_data)
    let stats = [];
    if(map_data){
    
        for (let [key,v] of Object.entries(map_data)) {
            stats.push(
            <div className='info-pt' key = {key}>
                {key}:{JSON.stringify(v)}
            </div>)
        }
    }
    return <div>
        {stats}
    </div>

}
//finds the first difficulty in array that matches mapLvl
function findDiff(diffs:LevelMapData[], mapLvl:MapLevel){
  
    return diffs.find(d=>d.difficulty==mapLvl)
}
interface MapDetailsProps{
    mapHash:string;
    mapLvl?:MapLevel
}
export default (MapDetails);
