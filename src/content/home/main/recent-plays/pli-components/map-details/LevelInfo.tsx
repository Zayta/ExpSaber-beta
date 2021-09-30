import React from "react";
import styled from "styled-components";
import { round } from "../../../../../../utils/Math";
import { LevelMapData } from "../../../../data/models/SongData";

const LevelInfoContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    width:50%;
    border:1px inset grey;
`;
const InfoPt = styled.span`
display:flex;
margin-left:5px;
width:fit-content;
img{
    height:1em;
    margin:2px;
}

`;
const iconURL = "https://beatsaver.com"
const LevelInfo: React.FC<LevelInfoProps> = ({ map_data }) =>{
    if(map_data){
        return <LevelInfoContainer>
                
                <InfoPt><img alt="Notes" src={iconURL+"/static/icons/notes.png"}  /> {map_data.notes}</InfoPt>
                
                <InfoPt><img alt="Bombs" src={iconURL+"/static/icons/bombs.png"}  title="Bombs" />{map_data.bombs}</InfoPt>
                
                <InfoPt><img alt="Walls" src={iconURL+"/static/icons/walls.png"}  title="Walls" />{map_data.obstacles}</InfoPt>
                
                <InfoPt><img alt="Note jump speed" src={iconURL+"/static/icons/njs.png"}  title="njs" />{round(map_data.njs)}</InfoPt>
                
                <InfoPt><img alt="Notes per second" src={iconURL+"/static/icons/nps.png"}  title="nps" />{round(map_data.nps)}</InfoPt>
        </LevelInfoContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    map_data:LevelMapData|undefined;
}