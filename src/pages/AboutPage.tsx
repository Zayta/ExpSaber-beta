import styled from "styled-components";
import About from "../components/about/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutLayout = styled.div``;
const AboutPage = ()=>{

    return <AboutLayout><Header/>
    <About/>
    <Footer/>
    </AboutLayout>
}
export default AboutPage;