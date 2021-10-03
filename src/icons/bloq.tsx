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

export const bsBloq = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' version='1.1'%3E%3Cg fill='none' stroke='%23000000' stroke-width='10'%3E %3Cpath d='M 100,7 189,47 100,87 12,47 Z' stroke-linejoin='round'/%3E %3Cpath d='M 189,47 189,155 100,196 12,155 12,47' stroke-linejoin='round'/%3E %3Cpath d='M 100,87 100,196' stroke-linejoin='round'/%3E %3Cpath d='M 26,77 85,106 53,130 Z' stroke-linejoin='round'/%3E %3C/g%3E %3C/svg%3E";