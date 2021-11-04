
import styled from 'styled-components';

const PPMeterStyle = styled.div`
    width:10vw;
`;

const PPMeter = (props:PPMeterProps) =>{
    return <PPMeterStyle>
        
        <div>pp: {props.pp}</div>
        </PPMeterStyle>
}
export default PPMeter

interface PPMeterProps{
    pp:number
}