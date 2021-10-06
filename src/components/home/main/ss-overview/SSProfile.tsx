import styled from "styled-components";
import { ssWebProfilePrefix } from "../../../../config/Constants";
import { PlayerData} from "../../../../data/models/PlayerData";
import AccuracyBar from "./ss-metrics/AccuracyBar";
import { Box } from "react-feather";

const SSOverviewContainer = styled.div`
display:flex;
flex-flow:row wrap;
justify-content: space-around;
`;
const PlayerDataContainer = styled.div`
display:flex;
flex-flow: row wrap;
justify-content:space-around;
width:100%;
min-width:fit-content
*+*{
    margin-left:10px;
}
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
}
h3,h4,h5{
    display:block;
    color: var(--txt-color3);
    text-align:center;
    margin-bottom:5px;
}
`;
const ScoreSaberOverview = (props:ScoreSaberOverviewProps) =>{
    if(!props.playerData){
        return <div></div>
    }

    return <div>
    <div style = {{'float':'right'}}>
    <a target = "_blank" rel="noreferrer" href = {ssWebProfilePrefix+props.playerData?.playerInfo.playerId}><Box/></a>
    </div>
    <SSOverviewContainer>
            {props.playerData?
                <PlayerDataContainer>
                    <div style = {{'alignItems':'flex-start'}}>
                    <div style = {{'display':'inline'}}>Global Rank: <a target = "_blank" rel="noreferrer" href = {"https://scoresaber.com/global/"+Math.ceil(props.playerData.playerInfo.rank/50)}>#{props.playerData.playerInfo.rank}</a></div>
                    <div>Performance Points: {props.playerData.playerInfo.pp}</div>
                    <div>Ranked Maps Played: {props.playerData.scoreStats.rankedPlayCount}</div>
                    <div>Total Ranked Score: {props.playerData.scoreStats.totalRankedScore}</div>
                    </div>
                    <AccuracyBar accuracy={props.playerData.scoreStats.averageRankedAccuracy}/>
                    
                </PlayerDataContainer>
                :
                <div>[No player data]</div>}
            
    </SSOverviewContainer>
    </div>
}
export default ScoreSaberOverview;


interface ScoreSaberOverviewProps{
    playerData:PlayerData | undefined
        
}
  