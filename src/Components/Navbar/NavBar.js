import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import darkLogo from '../../Assets/logo-dark.svg'
import lightLogo from '../../Assets/logo-light.svg'

const NavBar = () => {

    const[logo, setLogo] = useState(darkLogo);
    const[active, setActive] = useState('');
    const [navBar, setNavBar] = useState(false);

    const handleLight = () => {
        setLogo(lightLogo);
    }

    const handleDark = () => {
        setLogo(darkLogo);
    }

    const handleCat = (e) => {
        setActive(e.target.value);
    }

    const changeBackground = () => {
        if(window.scrollY > 0){
            setNavBar(true)
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
    <div className={`navbar ${navBar === true && 'active'}`} onMouseOver={handleLight} onMouseLeave={handleDark}>
        <ul className='flex-around uppercase exo nav'>
            <Link to='/about'>
                <li value={1} onClick={handleCat} className={`cat ${active === 1 && 'active'}`}>
                about
                </li>
            </Link>

            <Link to='/projects'>
                <li value={2} onClick={handleCat} className={`cat ${active === 2 && 'active'}`}>
                projects
                </li>
            </Link>

            <Link to='/'>
                <li value='home' onClick={handleCat}>
                    <img className={`${navBar === true && 'active-img'}`} src={logo} alt='logo'/>
                </li>
            </Link>
            <Link to='/services'>
                <li value={3} onClick={handleCat} className={`cat ${active === 3 && 'active'}`}>
                services
                </li>
            </Link>

            <Link to='/contact'>
                <li  value={4} onClick={handleCat} className={`cat ${active === 4 && 'active'}`}>
                contact
                </li>
            </Link>
        </ul>

    </div>
  )
};

export default NavBar;
