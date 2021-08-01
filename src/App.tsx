
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './about/About';
import Home from './home/Home';
import Main from './home/main/Main';
import Navbar from './routing/navbar/Navbar';
import AppRouter from './routing/AppRouter';
// import About from '../../about/About';
function App() {
  
  const links = ["Home","About"]
  return <div className = 'container'>
        <AppRouter/>
        <Footer/>
  </div>
}

export default App;
