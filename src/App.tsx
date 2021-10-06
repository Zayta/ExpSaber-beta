
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom';

import RouteContent from './routing/Routes';
function App() {
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
