//options to download, request map on twitch, view on Beatsaver

import styled from "styled-components";
import SongData from "../../../../data/models/SongData";
import TwitchRq from "./TwitchRq";

const MapActionsContainer = styled.div`

`;
const MapActions:React.FC<MapActionsProps> = ({songData})=>{
    return <MapActionsContainer>
        <TwitchRq bsr = {songData.id}/>
    </MapActionsContainer>
}

interface MapActionsProps{
    songData:SongData
}

export default MapActions