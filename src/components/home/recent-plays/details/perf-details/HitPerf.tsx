import styled from "styled-components";
import { leftColor, rightColor } from "../../../../../config";
import { HitTracker } from "../../../../../data/models/BeatSaviorData";

const HitPerfStyle = styled.div`

display:grid;
grid-template-rows: 1fr 1fr;

grid-template-columns: 1fr 1fr;
padding:5px;
width:fit-content;
font-size:small;
    *+*{
        margin-left:5px;
    }
    .left{
        color: ${leftColor}
    }
    .right{
        color: ${rightColor}
    }
    .info{
        display:flex;
    }
    .lbl{
        display:flex;
        justify-content:flex-end;
    }
`;

const HitPerf = ({hitTracker}:HitPerfProps) =>{
    return <HitPerfStyle>


<span className = 'lbl'>Missed Notes:</span>
        <div className = 'info'>
        <span className = "left">
        {hitTracker.leftMiss}
        </span>
        <span className = "right">
        {hitTracker.rightMiss}
        </span>
        </div>
        
        <span className = 'lbl'>Bad Cuts:</span>
        <div className = 'info'>
        <span className = "left">
        {hitTracker.leftBadCuts}
        </span>
        <span className = "right">
        {hitTracker.rightBadCuts}
        </span>
        </div>
        
    </HitPerfStyle>
}
interface HitPerfProps{
    hitTracker:HitTracker
}
export default HitPerf;