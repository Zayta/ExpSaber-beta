
import styled from 'styled-components';
import { routes } from '../routing/Routes';
import Navbar from '../routing/navbar/Navbar';

const HeaderStyle = styled.div`

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


    return  <HeaderStyle>
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
            
        </HeaderStyle>
}
export default Header;