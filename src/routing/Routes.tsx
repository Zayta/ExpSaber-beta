import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import About from '../content/about/About';
import Home from '../content/home/Home'

export const routes = ["Home","About"];

const RouteContent = () =>{
    
    const links = []
    return <div className = 'content'>  
        <Switch>
        <Route path="/ExpSaber/ssid/:ssid" >
          <Home  />
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