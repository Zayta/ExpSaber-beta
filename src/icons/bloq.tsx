import styled from "styled-components";

const BloqStyle = styled.div`
width: 3.0vw;
height:3.0vw;
border-radius: 0.5vw;
display:flex;
justify-content:center;

transform:scale(0.9);
.arrow-down{
    width: 0; 
    height: 0; 
    border-left: 1.6vw solid transparent;
    border-right: 1.6vw solid transparent;
    margin-top:0.0vw;
    border-top: 1vw dashed white;

}
`;

const Bloq = (props:{color:string}) =>{
    return <BloqStyle style = {{backgroundColor: props.color, boxShadow:'-2px 2px 2px ' + props.color}}>
        <div className = "arrow-down" >
            </div>
    </BloqStyle>
}
export default Bloq;