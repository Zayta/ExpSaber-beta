import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import About from '../content/about/About';
import Home from '../content/home/Home'
import Search from "../content/home/search/Search";

export const routes = ["Home","About"];

const RouteContent = () =>{
    
    const links = []
    return <div className = 'content'>  
        <Switch>
        <Route path="/ExpSaber/ssid/:ssid" >
          <Home  />
        </Route>
        
        <Route exact path="/ExpSaber" >
          <Search  />
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