import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {Button} from './Button';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    //function that negastes whatever the click value is 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    //makes it so sign up button disapears when in mobile
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true);
        }
    };

    //prevents the sign-up button from re-appearing when refresh in mobile mode
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Dolphin 
                        <FontAwesomeIcon icon={faPersonSwimming} />
                    </Link>
                    <div className = 'menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className ='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className ='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className ='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className ='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;