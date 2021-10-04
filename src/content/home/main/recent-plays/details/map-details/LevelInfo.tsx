import React from "react";
import styled from "styled-components";
import { round } from "../../../../../../utils/Math";
import { iconURL } from "../../../../data/constants/Constants";
import { LevelMapData } from "../../../../data/models/SongData";

const LevelInfoContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    padding-right:5px;
    border:1px inset grey;
    
width:fit-content;
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
const LevelInfo: React.FC<LevelInfoProps> = ({ map_data }) =>{
    if(map_data){
        return <LevelInfoContainer>
                
                <InfoPt><img alt="Notes" src={iconURL+"notes.png"}  /> {map_data.notes}</InfoPt>
                
                <InfoPt><img alt="Bombs" src={iconURL+"bombs.png"}  title="Bombs" />{map_data.bombs}</InfoPt>
                
                <InfoPt><img alt="Walls" src={iconURL+"walls.png"}  title="Walls" />{map_data.obstacles}</InfoPt>
                
                <InfoPt><img alt="Note jump speed" src={iconURL+"njs.png"}  title="njs" />{round(map_data.njs)}</InfoPt>
                
                <InfoPt><img alt="Notes per second" src={iconURL+"nps.png"}  title="nps" />{round(map_data.nps)}</InfoPt>
        </LevelInfoContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    map_data:LevelMapData|undefined;
}