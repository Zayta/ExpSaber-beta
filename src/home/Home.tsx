import React, { useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './home.scss'
import Main from './main/Main'
import Search from './search/Search';



const Home = ()=> { 
  const [searched,setSearched] = useState();
    return  <div>
      <Search/>
      {
        searched?<Main/>:<div></div>
      }
    </div>
}

export default Home;
