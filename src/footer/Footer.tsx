import styled from "styled-components";

const FooterContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: small;
`
const FooterWrapper = styled.div`
width: fit-content;
height: fit-content;

footer{
    display: block;
    width: 100%;
    text-align: center;
}
footer>*::selection{
    font-size: 1.6em;
}
`;
const Footer = () =>{

    return(
        <FooterContainer>
            <div className = 'footer-wrapper'>
                <footer>
                    <div>Copyright © 2021, <a target = "_blank" rel="noreferrer" href = "https://github.com/Zayta" style = {{'color':'white'}}>Zayta</a></div>
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                </footer>
                
            </div>
        </FooterContainer>
    )
}
export default Footer;