import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import About from "../about/About"
import Header from "../header/Header"
import Home from "../home/Home"
import Main from "../home/main/Main"
import Navbar from "./navbar/Navbar"

const AppRouter = () =>{
    
    const links = ["Home","About"]
    return <div>
    
    <BrowserRouter>
    
    <div className='header'>
          <Header/>
          <Navbar links = {links}/>
    </div>
      <div className = 'content'>  
        <Switch>
        <Route path="/ExpSaber/:ssid" >
          
          <Main  />
        </Route>
        
        <Route exact path="/ExpSaber" >
          
        <Redirect to="/" />
          
        </Route>
        
        <Route path="/About" >
            <About/>
        </Route>
        <Route exact path="/" >
        <Home  />
            </Route>
          </Switch>
        </div>
        
    </BrowserRouter>
    </div>
}
export default AppRouter;