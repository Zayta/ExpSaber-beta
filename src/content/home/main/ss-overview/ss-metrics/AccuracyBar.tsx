
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import styled from 'styled-components';
import { round } from '../../../../../utils/Math';

const AccuracyBarContainer = styled.div`
width:10vw;
display:block;

}`;

const pathColor = 'var(--txt-color3)'
const trailColor = '#ffffff'
const circularBarStyle = buildStyles({pathColor:pathColor,textColor:pathColor,trailColor:trailColor,strokeLinecap: 'round'});
const AccuracyBar = (props:AccuracyBarProps) =>{
    return <AccuracyBarContainer>
        <h5>Avg Accuracy</h5>
        <CircularProgressbar styles = {circularBarStyle} value={props.accuracy} text = {""+round(props.accuracy,2)+"%"} maxValue={100} minValue={50}/>
    </AccuracyBarContainer>
}

interface AccuracyBarProps{
    accuracy: number
}
export default AccuracyBar;
