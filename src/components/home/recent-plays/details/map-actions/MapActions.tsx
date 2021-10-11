//options to download, request map on twitch, view on Beatsaver

import { Box, Download, DownloadCloud, Music, Play } from "react-feather";
import styled from "styled-components";
import { mobileBreakpoint } from "../../../../../config";
import { beatsaverMapPrefix } from "../../../../../config/static";
import SongData from "../../../../../data/models/SongData";
import TwitchRq from "./TwitchRq";

const MapActionsContainer = styled.div`
margin: 5px 0 0 0;
display:flex;
max-width:100%;
flex-flow:row wrap;
a{
    margin:0 5px 0 0;
    min-width:38px;
    min-height:38px;
    :hover{
        color:var(txt-color3);
    }
}
@media only screen and (max-width: ${mobileBreakpoint}){
    flex-flow: row wrap;
    justify-content:space-between;
    align-items:center;
    width:100%;
        div {
            padding:5px;
        }
        svg{
            min-width:38px;
            min-height:38px;
            width:100%;
        }
}
`;
const MapActions:React.FC<MapActionsProps> = ({songData})=>{
    if(!songData)
    {return <div/>}
    return <MapActionsContainer>
        
        
        <a className = 'action' title = "Copy bsr" aria-label = "Copy bsr" ><TwitchRq bsr = {songData.id}/></a>
        
        <a target = "_blank" rel="noreferrer" title = "View on BeatSaver" aria-label="View on BeatSaver" href = {beatsaverMapPrefix+songData.id}><Box/></a>
        
        <a className = 'action'href="beatsaver://188c9" title="One-Click (requires ModAssistant)" aria-label="One-Click"><DownloadCloud/></a>


        <a className = 'action'title="Download zip" aria-label="Download zip" href = {songData.versions[0].downloadURL}><Download/></a>

        <a className = 'action' title="Audio Sample" aria-label="Audio Sample" href = {songData.versions[0].previewURL}><Music/></a>
    </MapActionsContainer>
}

interface MapActionsProps{
    songData:SongData|undefined
}

export default MapActions