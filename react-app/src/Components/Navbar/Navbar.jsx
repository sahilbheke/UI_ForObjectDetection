import React from "react";
import './Navbar.css'
import dark from '../../assets/dark3.png'
import light from '../../assets/light2.png'

const Navbar = ({ theme, setTheme }) =>{

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark'): setTheme('light')
    }
    return (
        <div className="navbar">
            <p>Detect ME</p>
            <ul>
               
                <li>Home</li>
                <li>About</li>
            </ul>

            <img  onClick={()=>{toggle_mode()}} src={theme == 'light' ? light : dark} alt="lk" className="toggle-icon"></img>
        </div>
    )
}


export default Navbar;