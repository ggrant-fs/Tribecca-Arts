import React from 'react';
import Nav from './Nav';


const Header = (props) =>{
    return(
       <div className="main-header">
        <h1 className="main-header__title">Tribecca Arts</h1>
         <Nav/>
       </div>
    )
}

export default Header;