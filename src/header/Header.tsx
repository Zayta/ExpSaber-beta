
import './header.scss';
import Navbar from '../routing/navbar/Navbar';
import SearchName from '../main/home/search/search-players/SearchName';
import { useParams,useLocation } from 'react-router-dom';
import { routes } from '../routing/Routes';
import SearchID from '../main/home/search/search-players/SearchID';
import styled from 'styled-components';

const HeaderContainer = styled.div`

box-sizing: border-box;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
.header-wrapper h1{
  // font-family: customfont;
  margin:0;
}
.header-wrapper h1::selection{
  color:black;
  background-color: var(--txt-color1);
  width: 100%;
}
.header-wrapper{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.title-and-search{
  display:flex;
  flex-flow:row wrap;
}
.header-search{
  display: flex;
  align-items: center;
  margin-top:0.67em;
  
}
*+.header-search{
  padding-left:2vw;
  
}

`;

const Header = () =>{
    
  const location = useLocation();
  console.log(location.pathname);
    let showSearch = true;

    return  <div className = 'header-container'>
            {/* <div className = {showSearch?'title-and-search':'hidden'}> */}
            <div className = 'header-wrapper'>
            <h1>
                ExpSaber
            </h1>
            
            </div>
            {/* </div> */}
            
            {/* <div className = {'header-search'}>
            <SearchName/>
            </div> */}
            
            <div style = {{'display':'flex', 'alignItems':'center', 'flexFlow':'row wrap','justifyContent':'flex-end'}}>
            <Navbar links = {routes}/>
            
            </div>
            
        </div>
}
export default Header;