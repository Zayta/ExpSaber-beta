import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "./Home";

const HomeLayout = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
min-height:100vh;
`;
const HomePage = ()=>{

    return <HomeLayout>
        <div>
    <Header/>
    <Home/>
    </div>
    <Footer/>
    </HomeLayout>
}
export default HomePage;