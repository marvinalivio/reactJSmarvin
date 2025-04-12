import React from 'react';
import { useEffect, useState } from 'react';
import { Context } from '../useContext/useContext';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import logo from '../assets/logo.png';

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = Context();
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState('/');
    const [isShrunk, setIsShrunk] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = (path) => {
        setIsActive(path);
        toggleMenu(); // close menu if needed
    };
    return (
        <header  className={`transition-all duration-300 ease-in-out ${isShrunk ? 'py-2 shadow-md inScroll' : 'py-4'}`}>

                <div className='row'>
                    <div className='items-center flex navContainer'>
                    <img src={logo} className='logo' />
                    <nav className="navbar">
                        <div className={`nav-links ${isOpen ? "open" : ""}`}>
                            <a href="/" className={isActive === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</a>
                            <a href="#traning" className={isActive === '#traning' ? 'active' : ''} onClick={() => handleLinkClick('#traning')}>Training</a>
                            <a href="#services" className={isActive === '#services' ? 'active' : ''} onClick={() => handleLinkClick('#services')}>Services</a>
                            <a href="#skills" className={isActive === '#services' ? 'active' : ''} onClick={() => handleLinkClick('#skills')}>Skills</a>
                            <a href="#experience" className={isActive === '#experience' ? 'active' : ''} onClick={() => handleLinkClick('#experience')}>Work Experience</a>
                            <a href="/contact">Contact</a>
                        </div>
                        <div className="menu-icon" onClick={toggleMenu}>
                            ☰
                        </div>
                    </nav>
                    </div>
                </div>
        </header>
    )
}


export default Header;