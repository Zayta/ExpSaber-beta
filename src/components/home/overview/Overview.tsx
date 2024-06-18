import styled from "styled-components";
import { PlayerInfo } from "../../../data/models/PlayerData";
import  SSScore  from "../../../data/models/ScoreData";
import General from "./recent/General";
import ScoreSaberOverview from "./ss-overview/SSProfile";

const OverviewStyle = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        padding:0;
        margin:0;
    }
`;
const Overview = ({playerData,scoresData}:OverviewProps) =>{
    if(!scoresData||!scoresData.length){
        return <div>No recent plays</div>
    }

    return <OverviewStyle>
        <h3>General</h3>
        <General playerData={playerData} scoresData={scoresData}/>
        <h3>ScoreSaber</h3>
        <ScoreSaberOverview playerData={playerData}/>
        </OverviewStyle>
}
interface OverviewProps{
    
    playerData:PlayerInfo | undefined;
    scoresData:SSScore[] | undefined;
}
  
export default Overview;