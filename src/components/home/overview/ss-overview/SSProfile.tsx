import styled from "styled-components";
import { ssWebProfilePrefix } from "../../../../config/static";
import { PlayerData} from "../../../../data/models/PlayerData";
import AccuracyBar from "../metrics/AccuracyBar";
import { Box } from "react-feather";

const SSOverviewStyle = styled.div`
display:flex;
flex-flow:row wrap;
justify-content: space-around;
`;
const PlayerDataStyle = styled.div`
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
    text-align:center;
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
    <SSOverviewStyle>
            {props.playerData?
                <PlayerDataStyle>
                    <div style = {{'alignItems':'flex-start'}}>
                    <div style = {{'display':'inline'}}>Global Rank: <a target = "_blank" rel="noreferrer" href = {"https://scoresaber.com/rankings?page="+Math.ceil(props.playerData.playerInfo.rank/50)}>#{props.playerData.playerInfo.rank}</a></div>
                    <div>Performance Points: {props.playerData.playerInfo.pp}</div>
                    <div>Ranked Maps Played: {props.playerData.scoreStats.rankedPlayCount}</div>
                    <div>Total Ranked Score: {props.playerData.scoreStats.totalRankedScore}</div>
                    </div>
                    <div>
                        Avg Ranked Accuracy
                    <AccuracyBar accuracy={props.playerData.scoreStats.averageRankedAccuracy}/>
                    </div>
                </PlayerDataStyle>
                :
                <div>[No player data]</div>}
            
    </SSOverviewStyle>
    </div>
}
export default ScoreSaberOverview;


interface ScoreSaberOverviewProps{
    playerData:PlayerData | undefined
        
}
  