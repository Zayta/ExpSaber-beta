import styled from "styled-components";
import SongData, { LevelMapData } from "../../../../../data/models/SongData";
import LevelInfo from "./LevelInfo";

const MapDetailsStyle=styled.div`
display:flex;
flex-direction:column;
font-size:0.7em;
max-width:100%;
width:fit-content;
`;
const MapDetails: React.FC<MapDetailsProps> = ({songData,lvlMapData})=>{
    if(!songData)
        return <div/>
    return <MapDetailsStyle>
                    {lvlMapData?<LevelInfo map_data={lvlMapData}/>:<div/>}

    </MapDetailsStyle>
}
interface MapDetailsProps{
    songData:SongData | undefined;
    lvlMapData:LevelMapData | undefined;
}
export default MapDetails;