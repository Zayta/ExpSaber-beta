import styled from "styled-components";
import { beatsaverMapPrefix } from "../../../../data/constants/Constants";
import SongData, { LevelMapData } from "../../../../data/models/SongData";
import LevelInfo from "./LevelInfo";
import MapCreationInfo from "./MapCreationInfo";

const MapDetailsContainer=styled.div`
display:flex;
flex-direction:column;
font-size:0.7em;

`;
const MapDetails: React.FC<MapDetailsProps> = ({songData,lvlMapData})=>{
    if(!songData)
        return <div/>
    return <MapDetailsContainer>
                    {lvlMapData?<LevelInfo map_data={lvlMapData}/>:<div/>}

    </MapDetailsContainer>
}
interface MapDetailsProps{
    songData:SongData | undefined;
    lvlMapData:LevelMapData | undefined;
}
export default MapDetails;