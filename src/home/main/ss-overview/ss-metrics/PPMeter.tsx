
import styled from 'styled-components';

const PPMeterContainer = styled.div`
    width:10vw;
`;

const PPMeter = (props:PPMeterProps) =>{
    return <PPMeterContainer>
        <h5>pp</h5>
        
        <div>{props.pp}</div>
        </PPMeterContainer>
}
export default PPMeter

interface PPMeterProps{
    pp:number
}