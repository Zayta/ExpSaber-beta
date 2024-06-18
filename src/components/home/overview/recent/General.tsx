import styled from "styled-components";
import { PlayerInfo } from "../../../../data/models/PlayerData";
import SSScore from "../../../../data/models/ScoreData";

const GeneralStyle = styled.div``;
const General = ({scoresData,playerData}:GeneralProps) =>{
    return <GeneralStyle>
        <div>
        Total Plays: {playerData?.scoreStats.totalPlayCount}
        </div>
        <div>
        Total SSScore: {playerData?.scoreStats.totalScore}
        </div>
        <div>
        {/* Average Recent Accuracy (of last {scoresData.length} maps played): {avgAcc}% */}
        </div>
    </GeneralStyle>
}

interface GeneralProps{
    
    playerData:PlayerInfo | undefined;
    scoresData:SSScore[];
}


export default General;