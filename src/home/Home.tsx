import React, { useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './home.scss'
import Main from './main/Main'
import Search from './search/Search';



const Home = ()=> { 
    return  <div>
      <Search/>
     <Main/>
    </div>
}

export default Home;
