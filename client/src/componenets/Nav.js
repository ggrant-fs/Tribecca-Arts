import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Nav =(props) =>{
    return (
       <Fragment>
        <ul className='nav-list'>
            <li className='nav__item'><NavLink activeClassName='activeStyling' to='/home'>Home</NavLink></li>
            <li className='nav__item'><NavLink activeClassName='activeStyling' to='/art'>Art</NavLink></li>
            <li className='nav__item'><NavLink activeClassName='activeStyling' to='/tickets'>Tickets</NavLink></li>
            <li className='nav__item'><NavLink activeClassName='activeStyling' to='/signup'>Sign Up</NavLink></li>
        </ul>
       </Fragment>
    )
}

export default Nav;