
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import RouteContent from './routing/Routes';
// import About from '../../about/About';
function App() {
  
  const links = ["Home","About"]
  return <div className = 'container'>
      <BrowserRouter>
        <Header/>
        <RouteContent/>
        <Footer/>
      </BrowserRouter>
  </div>
}

export default App;
