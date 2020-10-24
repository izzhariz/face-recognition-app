import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

function Logo() {
    return (
        <div class="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa-3">
                    <img style={{paddingTop: '25px'}} alt='Logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
};

export default Logo;