import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/home/Home";

const HomeLayout = styled.div`
display:block;
`;
const HomePage = ()=>{

    return <HomeLayout><Header/>
    <Home/>
    <Footer/>
    </HomeLayout>
}
export default HomePage;