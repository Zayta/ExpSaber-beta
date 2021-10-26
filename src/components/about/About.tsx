import styled from 'styled-components';
import Contact from './contact/Contact'
const AboutContainer = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;

.about-item-wrapper{
    text-align: center;
}
.about-item-wrapper a{
    margin-left: 5px;
    color:var(--txt-color1)
}
`;

const About = () =>{
    
    return <AboutContainer>
    <div className='about-item-wrapper'>
        <div>ExpSaber is a simple plays tracker for the VR rhythm game
            <a href = "https://beatsaber.com/">Beat Saber</a>.
        </div>
        <div>It is built on top of the ScoreSaber and Beat Saver APIs.</div>
    </div>
    <div>Any tips or feedback would be appreciated!</div>
    <Contact/>
</AboutContainer>
}
export default About;
