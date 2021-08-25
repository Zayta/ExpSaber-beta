
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import styled from 'styled-components';
import { round } from '../../../../utils/Math';

const AccuracyBarContainer = styled.div`
width:10vw;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h3,h4,h5{
    pathColor:white;
    text-align:center;
    margin-bottom:5px;
}
}`;

const pathColor = 'var(--txt-color3)'
const trailColor = '#ffffff'
const circularBarStyle = buildStyles({pathColor:pathColor,textColor:pathColor,trailColor:trailColor,strokeLinecap: 'round'});
const AccuracyBar = (props:AccuracyBarProps) =>{
    return <AccuracyBarContainer>
        <h5>Accuracy</h5>
        <CircularProgressbar styles = {circularBarStyle} value={props.accuracy} text = {""+round(props.accuracy,2)} maxValue={100} minValue={50}/>
    </AccuracyBarContainer>
}

interface AccuracyBarProps{
    accuracy: number
}
export default AccuracyBar;
