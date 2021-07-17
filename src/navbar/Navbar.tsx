import React, { Component} from 'react'
import './navbar.scss'

import { Link} from 'react-router-dom';


export default class Navbar extends Component<RoutingLinks,ActiveLink> {
    constructor(props:RoutingLinks){
        super(props);
        this.state = {
            activeLink:'/'
        }   
    }

    createLinks(links:string[]){
        return <div id = "navbar" className="nav-main">{links.map(link =>{
            const formattedLink = "/"+link;
            return <div key = {link}>
                <Link to={formattedLink} >
                {link}
                </Link>
            </div>
        })}</div>
    }

    render(){
        return <div className = 'navbar-wrapper'>
                {this.createLinks(this.props.links)}
            </div>
    }
}
interface RoutingLinks{
    links:string[];
}
interface ActiveLink{
    activeLink:string;
}