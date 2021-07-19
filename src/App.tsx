
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './about/About';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
// import About from '../../about/About';
function App() {
  
  const links = ["Home","About"]
  return <div className = 'container'>
        <BrowserRouter>

        <div className = 'header'>
          <Header/>
            <Navbar links = {links}/>
        </div>

          <div className = 'content'>  
            <Switch>
            <Route path="/MySaber" >
              <Home  />
            </Route>
            
            <Route path="/About" >
                <About/>
            </Route>
            <Route path="/" >
                <Redirect to="/MySaber" />
                </Route>
              </Switch>
            </div>

          <Footer/>
        </BrowserRouter>
  </div>
}

export default App;
