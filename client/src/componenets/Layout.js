import React,{Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const Layout =(props) =>{
    return (
        <Fragment>
          <Header/>
          <Banner/>
             {props.children}
          <Footer/>
        </Fragment>
    )
}

export default Layout;