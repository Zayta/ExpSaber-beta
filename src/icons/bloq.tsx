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
    border-left: 1.0vw dashed transparent;
    border-right: 1.0vw dashed transparent;
    
    border-top: 1vw dashed white;

}
`;

const Bloq = (props:{color:string}) =>{
    return <BloqStyle style = {{backgroundColor: props.color}}>
        <div className = "arrow-down" >
            </div>
    </BloqStyle>
}
export default Bloq;