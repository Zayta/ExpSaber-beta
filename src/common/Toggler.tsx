
import {Plus,Minus} from "react-feather"
import styled from "styled-components";
const LiIndicator = styled.div`
    *{width:10px; margin-right:10px;};
`;

const TogglerC = styled.div`
cursor: pointer;
:hover{
    color: var(--txt-color4);
}
`;

const Toggler=(props:TogglerProps)=>{
    return <TogglerC  onClick={props.toggleFunction}>
    <LiIndicator>
    {
        props.toggled?<Minus/>:
        <Plus/>
    }
    </LiIndicator>
</TogglerC>

}
export default Toggler;
interface TogglerProps{
    toggleFunction:()=>void;
    toggled:boolean;
}