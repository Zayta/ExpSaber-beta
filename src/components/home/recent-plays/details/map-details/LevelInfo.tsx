import React from "react";
import styled from "styled-components";
import { round } from "../../../../../utils/Math";
import { iconURL } from "../../../../../config/static";
import { LevelMapData } from "../../../../../data/models/SongData";
import { mobileBreakpoint } from "../../../../../config";

const LevelInfoStyle = styled.div`
    display:flex;
    flex-flow: row wrap;
    padding-right:5px;
    
    border:1px inset grey;
    
    max-width:100%;
    @media only screen and (max-width:${mobileBreakpoint}){
        margin-top:10px;
    }
`;
const InfoPt = styled.span`
display:flex;
margin-left:5px;
width:fit-content;
img{
    height:1em;
    margin:2px;
}
@media only screen and (max-width:${mobileBreakpoint}){
    font-size:large;
}

`;
const LevelInfo: React.FC<LevelInfoProps> = ({ map_data }) =>{
    if(map_data){
        return <LevelInfoStyle>
                
                <InfoPt><img alt="Notes" src={iconURL+"notes.png"}  title="Total Notes"  /> {map_data.notes}</InfoPt>
                
                <InfoPt><img alt="Bombs" src={iconURL+"bombs.png"}  title="Bombs" />{map_data.bombs}</InfoPt>
                
                <InfoPt><img alt="Walls" src={iconURL+"walls.png"}  title="Walls" />{map_data.obstacles}</InfoPt>
                
                <InfoPt><img alt="Note jump speed" src={iconURL+"njs.png"}  title="Note jump speed" />{round(map_data.njs)}</InfoPt>
                
                <InfoPt><img alt="Notes per second" src={iconURL+"nps.png"}  title="Notes per second" />{round(map_data.nps)}</InfoPt>
        </LevelInfoStyle>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    map_data:LevelMapData|undefined;
}