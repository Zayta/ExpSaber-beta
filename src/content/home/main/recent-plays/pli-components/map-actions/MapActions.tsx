//options to download, request map on twitch, view on Beatsaver

import styled from "styled-components";
import SongData from "../../../../data/models/SongData";
import TwitchRq from "./TwitchRq";

const MapActionsContainer = styled.div`
margin: 0 5px 0 5px;
`;
const MapActions:React.FC<MapActionsProps> = ({songData})=>{
    if(!songData)
    {return <div/>}
    return <MapActionsContainer>
        <TwitchRq bsr = {songData.id}/>
    </MapActionsContainer>
}

interface MapActionsProps{
    songData:SongData|undefined
}

export default MapActions