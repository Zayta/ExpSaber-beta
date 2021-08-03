
import './header.scss';
import Navbar from '../routing/navbar/Navbar';
import SearchName from '../home/search/search-players/SearchName';
import { useParams } from 'react-router-dom';
import { routes } from '../routing/Routes';

const Header = () =>{
    let params = useParams();
    console.log(params)
    let showSearch = true;
    return  <div className = 'header-container'>
            <div className = {showSearch?'title-and-search':'hidden'}>
            <div className = 'header-wrapper'>
            <h1>
                ExpSaber
            </h1>
            
            </div>
            <div className = {'header-search'}>
            <SearchName/>
            </div>
            </div>
            
            <div style = {{'display':'flex', 'alignItems':'center', 'flexFlow':'row wrap','justifyContent':'flex-end'}}>
            <Navbar links = {routes}/>
            
            </div>
            
        </div>
}
export default Header;