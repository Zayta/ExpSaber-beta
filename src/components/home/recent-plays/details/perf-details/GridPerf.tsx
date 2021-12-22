import styled from "styled-components";
import { leftColor, rightColor } from "../../../../../config";
import { AccuracyTracker } from "../../../../../data/models/BeatSaviorData"
import { round } from "../../../../../utils/Math";


const GridPerfStyle = styled.div`
display:flex;
flex-flow:column nowrap;
width:100%;

overflow:auto;
overflow-wrap:anywhere;
align-items:center;
`;
const GridPerf = ({accTracker}:AccProps) =>{


    return <GridPerfStyle>
        <div>Average Cut Grid</div>

        <div style={{'display':'flex'}}>
        <Grid arr = {accTracker.gridAcc}/>
        
        {/* <Grid arr = {accTracker.gridCut}/> */ /**This is the number of cuts per square */}
        </div>
    </GridPerfStyle>

}

export default GridPerf


const GridStyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 5px;
margin:5px;
padding:5px;
`;
const GridSquareStyle = styled.div`
  color: #000000;
  border-radius: 5px;
  padding: 20px;
  text-align:center;
  font-weight:bold;
  font-size:0.8em;
`;
const GridSquareInvStyle = styled.div`
  border-style:solid;
  border-width:5px;
  border-radius: 5px;
  padding: 20px;
  text-align:center;
  font-weight:bold;
  font-size:0.8em;
`;
//input array(12) for a 4*3 accuracy grid
const Grid = ({arr}:{arr:number[]}) =>{
    
    return <GridStyle>
        {arr.map((n,i)=><GridSquareStyle key = {i} style={i%4<2?{'backgroundColor':leftColor}:{'backgroundColor':rightColor}}>{round(n,2)}</GridSquareStyle>)}
    </GridStyle>
}

interface AccProps{
    accTracker:AccuracyTracker
}