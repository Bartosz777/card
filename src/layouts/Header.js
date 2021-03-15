import React from 'react';
import '../styles/Header.css'
import Menu from './Menu'
import Logo from './Logo'


const Header = () => { 

    return ( 
        <div className='head'>
            <Logo />
            <Menu />
        </div>
     );
}
 
export default Header;