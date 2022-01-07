import styled from 'styled-components';
import Contact from './contact/Contact'
const AboutStyle = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
margin:10px;
`;
const AboutItem = styled.div`

text-align: left;
a#bs{

    color:var(--txt-color1);
}
a{
    margin-left: 5px;
    color:var(--main-btn-color);
}
`;

const About = () =>{
    
    return <AboutStyle>
    <AboutItem>
        <div>ExpSaber is a simple plays tracker for the VR rhythm game
            <a id = 'bs' href = "https://beatsaber.com/">Beat Saber</a>.
        </div>
        <div>It is built on top of the <a href = "https://new.scoresaber.com/">ScoreSaber</a>, <a href = "https://api.beatsaver.com/docs/index.html?url=./swagger.json">BeatSaver</a>, and <a href = "http://next.beatsavior.io/">BeatSavior</a> APIs.</div>
    </AboutItem>
    <Contact/>
</AboutStyle>
}
export default About;
