import React from 'react';
import { Fragment } from 'react';

const Nav =(props) =>{
    return (
       <Fragment>
        <ul className='nav-list'>
            <li className='nav__item'>Home</li>
            <li className='nav__item'>Art</li>
            <li className='nav__item'>Tickets</li>
            <li className='nav__item'>Member</li>
        </ul>
       </Fragment>
    )
}

export default Nav;