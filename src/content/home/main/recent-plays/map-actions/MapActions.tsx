//options to download, request map on twitch, view on Beatsaver

import { Box, Download, DownloadCloud, Play } from "react-feather";
import styled from "styled-components";
import { bsBloq } from "../../../../../icons/bloq";
import { beatsaverMapPrefix } from "../../../data/constants/Constants";
import SongData from "../../../data/models/SongData";
import TwitchRq from "./TwitchRq";

const MapActionsContainer = styled.div`
margin: 5px 0 0 0;
display:flex;
a{
    margin:0 5px 0 0;
    
}
`;
const MapActions:React.FC<MapActionsProps> = ({songData})=>{
    if(!songData)
    {return <div/>}
    return <MapActionsContainer>
        
        
        <a className = 'action' title = "Copy bsr" aria-label = "Copy bsr" ><TwitchRq bsr = {songData.id}/></a>
        
        <a target = "_blank" rel="noreferrer" title = "View on BeatSaver" aria-label="View on BeatSaver" href = {beatsaverMapPrefix+songData.id}><Box/></a>
        
        <a className = 'action'href="beatsaver://188c9" title="One-Click" aria-label="One-Click"><DownloadCloud/></a>


        <a className = 'action'title="Download zip" aria-label="Download zip" href = {songData.versions[0].downloadURL}><Download/></a>

        <a className = 'action' title="Preview" aria-label="Preview" href = {songData.versions[0].previewURL}><Play/></a>
        <a className = 'action'href="beatsaver://188c9" title="One-Click" aria-label="One-Click"><i className="fas fa-cloud-download-alt text-info"></i></a>
    </MapActionsContainer>
}

interface MapActionsProps{
    songData:SongData|undefined
}

export default MapActions