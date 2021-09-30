import styled from "styled-components";
import { beatsaverMapPrefix } from "../../../../data/constants/Constants";
import SongData, { LevelMapData } from "../../../../data/models/SongData";
import LevelInfo from "./LevelInfo";
import MapCreationInfo from "./MapCreationInfo";

const MapDetailsContainer=styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
font-size:0.7em;

`;
const MapDetails: React.FC<MapDetailsProps> = ({songData,mapDiff})=>{
    return <MapDetailsContainer>
                  map id: {songData.id}
                  <MapCreationInfo songData={songData}/>
                    {mapDiff?<LevelInfo map_data={mapDiff}/>:<div/>}
                    <a target = "_blank" rel="noreferrer" href = {beatsaverMapPrefix+songData.id}>View on BeatSaver</a>

    </MapDetailsContainer>
}
interface MapDetailsProps{
    songData:SongData
    mapDiff:LevelMapData | undefined;
}
export default MapDetails;