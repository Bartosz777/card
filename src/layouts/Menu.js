import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Menu.css'

const menuList = [
    {name: 'home', path: '/', exact: true},
    {name: 'info',path: '/info'},
    {name: 'contact',path: '/contact'},
    {name: 'portfolio',path: '/portfolio'},
]


const Menu = () => {

    const menuElements = menuList.map(element => <li key={element.name}>
        <NavLink to={element.path} exact={element.exact ? element.exact : false}>{element.name}</NavLink>
    </li>)

    return ( 
        <nav className='menu'>
            <ul>{menuElements}</ul>
        </nav>
     );
}
 
export default Menu;