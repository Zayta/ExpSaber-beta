import styled from "styled-components";
import Bloq from "../../../icons/bloq";
import { ssWebProfilePrefix } from "../../data/api/ScoreSaberApi";
import { PlayerData} from "../../data/models/PlayerData";
import ScoresData, { Score } from "../../data/models/ScoreData";
import AccuracyBar from "./ss-metrics/AccuracyBar";

const SSOverviewContainer = styled.div`
display:flex;
flex-flow:row wrap;
justify-content: space-around;
`;
const PlayerDataContainer = styled.div`
width:fit-content;
min-width:fit-content`;
const ScoreSaberOverview = (props:ScoreSaberOverviewProps) =>{
    if(!props.ssData){
        return <div>[No scores available]</div>
    }

    return <div>
    <div style = {{'float':'right'}}>
    <a target = "_blank" href = {ssWebProfilePrefix+props.ssData.playerData?.playerInfo.playerId}><Bloq color = '#FFDE1A'/></a>
    </div>
    <SSOverviewContainer>
            {props.ssData.playerData?
                <PlayerDataContainer>
                    <AccuracyBar accuracy={props.ssData.playerData.scoreStats.averageRankedAccuracy}/>
                </PlayerDataContainer>
                :
                <div>[No player data]</div>}
            
    </SSOverviewContainer>
    </div>
}
export default ScoreSaberOverview;


interface ScoreSaberOverviewProps{
    ssData:{
        playerData:PlayerData | undefined
        scoresData:ScoresData | undefined
    } | undefined
}
  