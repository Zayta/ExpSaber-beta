
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'

import { BrowserRouter } from 'react-router-dom';

import RouteContent from './routing/Routes';
// import About from '../../about/About';
function App() {
  
  const links = ["Home","About"]
  return <div className = 'container'>
      <BrowserRouter>
      <div>
        <Header/>
        <RouteContent/>
      </div>
        <Footer/>
      </BrowserRouter>
  </div>
}

export default App;
