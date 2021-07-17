
import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import './header.scss';
export default class Header extends Component<HeaderProps> {
    
    
    render() {

        return(
            <div className = 'header-container'>
                <div className = {this.props.hideHeader?'hidden':'header-wrapper'}>
                    
                    <h1>
                        MySaber
                    </h1>
                </div>
            </div>
        )
        
    }
}
interface HeaderProps {
    hideHeader?:boolean
} 