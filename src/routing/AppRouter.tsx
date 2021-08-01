import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import About from "../about/About"
import Home from "../home/Home"
import Main from "../home/main/Main"
import Navbar from "./navbar/Navbar"

const AppRouter = () =>{
    
    const links = ["Home","About"]
    return <div>
    
    <BrowserRouter>
    <Navbar links = {links}/>
    
      <div className = 'content'>  
        <Switch>
        <Route path="/ExpSaber/:ssid" >
          <Main  />
        </Route>
        
        <Route exact path="/ExpSaber" >
          <Home  />
        </Route>
        
        <Route path="/About" >
            <About/>
        </Route>
        <Route path="/" >
            <Redirect to="/ExpSaber" />
            </Route>
          </Switch>
        </div>
        
    </BrowserRouter>
    </div>
}
export default AppRouter;