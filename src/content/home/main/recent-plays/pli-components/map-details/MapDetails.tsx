import styled from "styled-components";
import LoadingIndicator from "../../../../../../common/Loading";
import useBeatSaverData from "../../../../data/api/hooks/BeatSaverApi";
import MapLevel from "../../../../data/models/MapLevel";
import { LevelMapData} from "../../../../data/models/SongData";
const MapDetailsContainer = styled.div`
    display:flex;
    overflow-wrap:anywhere;
    img{
      max-width: 100%;
      max-height: 100%;
      width: 10vw;
      height: 10vw
  }
  .info-pt{
    
    text-transform: capitalize;
    font-size: 0.7em;
  }
`;
function MapDetails(props:MapDetailsProps) {
  const { status, data, error ,isFetching} = useBeatSaverData(props.mapHash);
  
  return <MapDetailsContainer>
            <div>
        
      {!data||status === "loading" ? (
        <LoadingIndicator/>
      ) : status === "error" ? (
        <span>Error: {error}</span>
      ) : (
        <>
          <img src ={data.versions[0].coverURL} alt = ""/>
          <p>{data.id}</p>

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
