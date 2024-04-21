import React from "react";
import './Navbar.css'
import dark from '../../assets/dark3.png'
import light from '../../assets/light2.png'

function Navbar() {
    
    return (
        <div className="navbar">
            <p>Detect ME</p>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>

        </div>
    )
}


export default Navbar;