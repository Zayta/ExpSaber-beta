import React, { Component} from 'react'
import Contact from './contact/Contact'
import './about.scss'
export default class About extends Component {
    
    render() {
        return <div className='about-container'>
            <div className='about-item-wrapper'>
                <div>ExpSaber is a simple plays tracker for the VR rhythm game
                    <a href = "https://beatsaber.com/">Beat Saber</a>.
                </div>
                <div>It is built on top of the ScoreSaber and Beat Savior APIs.</div>
            </div>
            <div>Any tips or feedback would be appreciated!</div>
            <Contact/>
        </div>
    }
}