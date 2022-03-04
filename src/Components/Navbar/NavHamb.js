import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import DarkLogo from '../../Assets/logo-dark.svg';
import Hamb from '../../Assets/hamb.svg';

const NavHamb = ({lang}) => {

    const [menu, setMenu] = useState(false);
    const [navBar, setNavBar] = useState(false);
    const[active, setActive] = useState('');
    let menuRef = useRef();

    const handleOpen = (e) => {
        if(menu === false){
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    const handleCat = (e) => {
        setActive(e.target.value);
    }

    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setMenu('none');
                setTimeout(() => {
                    setMenu(false)
                }, 300);
            } else {
                setTimeout(() => {
                    setMenu(false)
                }, 50);
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    
    const changeBackground = () => {
        if(window.scrollY > 0){
            setNavBar(true)
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <div>
        <div className={`flex-bet nav-hamb ${navBar === true && 'active'}`}>
            <Link to='/'>
                <img src={DarkLogo} alt='logo' onClick={handleCat}/>
            </Link>
            <div style={{zIndex: '2000'}}><img onClick={handleOpen} src={Hamb} alt='hamb' /></div>
        </div>
        {
            menu === true &&
            <div className='side-bar'>
                {lang === 'en' ?
                <ul ref={menuRef} className='uppercase bold exo nav'>
                    <Link to='/about'>
                        <li value={1} className={`cat ${active === 1 && 'active'}`} onClick={handleCat}>
                        about
                        </li>
                    </Link>
                    <Link to='/projects'>
                        <li value={2} className={`cat ${active === 2 && 'active'}`} onClick={handleCat}>
                        projects
                        </li>
                    </Link>
                    <Link to='/services'>
                        <li value={3} className={`cat ${active === 3 && 'active'}`} onClick={handleCat}>
                        services
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li value={4} className={`cat ${active === 4 && 'active'}`} onClick={handleCat}>
                        contact
                        </li>
                    </Link>
                </ul>
                :
                <ul ref={menuRef} className='uppercase bold exo nav'>
                    <Link to='/about'>
                        <li value={1} className={`cat ${active === 1 && 'active'}`} onClick={handleCat}>
                        sobre
                        </li>
                    </Link>
                    <Link to='/projects'>
                        <li value={2} className={`cat ${active === 2 && 'active'}`} onClick={handleCat}>
                        projetos
                        </li>
                    </Link>
                    <Link to='/services'>
                        <li value={3} className={`cat ${active === 3 && 'active'}`} onClick={handleCat}>
                        serviços
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li value={4} className={`cat ${active === 4 && 'active'}`} onClick={handleCat}>
                        contactos
                        </li>
                    </Link>
                </ul>
                }
                
            </div>
        }
        
    </div>
  )
}

export default NavHamb