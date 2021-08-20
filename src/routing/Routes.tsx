import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import About from "../about/About"
import Header from "../header/Header"
import Home from "../home/Home"
import Main from "../home/main/Main"

export const routes = ["Home","About"];

const RouteContent = () =>{
    
    const links = []
    return <div className = 'content'>  
        <Switch>
        <Route path="/ExpSaber/ssid/:ssid" >
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
        
}
export default RouteContent;