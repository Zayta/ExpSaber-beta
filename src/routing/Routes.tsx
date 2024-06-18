import { Redirect, Route, Switch } from "react-router-dom"
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage'

export const routes = ["Home","About"];

const RouteContent = () =>{
    
    return <div className = 'content'>  
        <Switch>
        
        <Route path="/ExpSaber/player/id/:id" >
          <HomePage  />
        </Route>
        
        <Route exact path="/ExpSaber" >
          <HomePage />
        </Route>
        
        <Route path="/About" >
            <AboutPage/>
        </Route>
        <Route path="/" >
            <Redirect to="/ExpSaber" />
            </Route>
          </Switch>
        </div>
        
}
export default RouteContent;