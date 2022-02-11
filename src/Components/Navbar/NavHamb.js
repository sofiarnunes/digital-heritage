import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import DarkLogo from '../../Assets/logo-dark.svg';
import Hamb from '../../Assets/hamb.svg';

const NavHamb = () => {

    const [menu, setMenu] = useState(false);
    let menuRef = useRef();

    const handleOpen = (e) => {
        if(menu === false){
            setMenu(true)
        } else {
            setMenu(false)
        }
    
    }


    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setMenu('none');
                setTimeout(() => {
                    setMenu(false)
                }, 300);
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    
  return (
    <div>
        <div className='flex-bet p-1'>
            <Link to='/home'>
                <img src={DarkLogo} alt='logo'/>
            </Link>
            <div style={{zIndex: '1050'}}><img onClick={handleOpen} src={Hamb} alt='hamb' /></div>
        </div>
        {
            menu === true &&
            <div className='side-bar'>
                <ul ref={menuRef} className='uppercase bold exo nav'>
                    <Link to='/about'>
                        <li className={`cat`}>
                        about
                        </li>
                    </Link>
                    <Link to='/gallery'>
                        <li className={`cat`}>
                        gallery
                        </li>
                    </Link>
                    <Link to='/services'>
                        <li className={`cat`}>
                        services
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li  className={`cat`}>
                        contact
                        </li>
                    </Link>
                </ul>
            </div>
        }
        
    </div>
  )
}

export default NavHamb