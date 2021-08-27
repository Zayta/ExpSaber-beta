
import styled from 'styled-components';

const PPMeterContainer = styled.div`
    width:10vw;
`;

const PPMeter = (props:PPMeterProps) =>{
    return <PPMeterContainer>
        
        <div>pp: {props.pp}</div>
        </PPMeterContainer>
}
export default PPMeter

interface PPMeterProps{
    pp:number
}