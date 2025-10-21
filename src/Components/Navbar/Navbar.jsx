// import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
    // const [menu, setMenu] = useState("home");


    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <ul className="nav-menu">
                <li>
                    <Link to="home" smooth={true} duration={500} offset={60}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-80}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} offset={-20}>
                        Contact
                    </Link>
                </li>
                <li>
                    <a
                        href="https://github.com/Alina201998"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        <FaGithub size={40} />
                    </a>
                </li>
            </ul>

            <a href="#contact" className="nav-connect">Connect With Me</a>
        </div>
    )
}

export default Navbar

