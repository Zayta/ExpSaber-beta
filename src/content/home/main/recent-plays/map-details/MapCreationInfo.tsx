import React from "react";
import styled from "styled-components";
import SongData from "../../../data/models/SongData";

const MapCreationInfoContainer = styled.div``;
const MapCreationInfo = ({ songData }:MapCreationInfoProps) =>{
    if(songData){

        const createdAtDate:Date = new Date(songData.createdAt);
        return <MapCreationInfoContainer>
            <React.Fragment>
                <div>created: {createdAtDate.toLocaleDateString()}</div>
            </React.Fragment>    
        </MapCreationInfoContainer>
    }
    return <div/>

}
interface MapCreationInfoProps{
    songData:SongData
}

export default MapCreationInfo;