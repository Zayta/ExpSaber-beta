import { memo } from "react";
import styled from "styled-components";
import LoadingIndicator from "../../../../../common/Loading";
import { round } from "../../../../../utils/Math";
import { formatTime } from "../../../../../utils/Time";
import useBeatSaverData, { beatsaverApiPrefix } from "../../../data/api/hooks/BeatSaverApi";
import MapLevel from "../../../data/models/MapLevel";
import SongData, { LevelMapData } from "../../../data/models/SongData";
const MapDetailsContainer = styled.div`
    display:flex;
    overflow-wrap:anywhere;
`;
function MapDetails(props:MapDetailsProps) {
  const { status, data, error } = useBeatSaverData(props.mapHash);
  console.log(data);
  if(data)
  console.log(data.versions[0])
  return <MapDetailsContainer>
            <div>
        
      {!data||status === "loading" ? (
        <LoadingIndicator/>
      ) : status === "error" ? (
        <span>Error: {error}</span>
      ) : (
        <>
          <img src ={data.versions[0].coverURL} alt = ""/>

          {props.mapLvl?renderMapSubInfo(data.versions[0].diffs[props.mapLvl]):<div/>}
        </>
      )}
    </div>
  </MapDetailsContainer>
}
const renderMapSubInfo = (map_data:any) =>{
    let stats = [];
    if(map_data&&map_data.length){
        map_data.length = formatTime(map_data.length)
    
        for (let key of Object.keys(map_data)) {
            stats.push(
            <div className='info-pt' key = {key}>
                {key}: {key==='length'?map_data[key]:round(map_data[key],2)}
            </div>)
        }
    }
    return <div>
        {stats}
    </div>

}

interface MapDetailsProps{
    mapHash:string;
    mapLvl?:MapLevel
}
export default memo(MapDetails);
