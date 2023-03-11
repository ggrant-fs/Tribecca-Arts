import React,{Fragment} from 'react';
import Layout from '../componenets/Layout';
import photo from '../images/museum.jpeg';
import Sectional from '../componenets/Sectional';
import Featured from '../componenets/Featured';
import Upcoming from '../componenets/Upcoming';
const Home =(props)=>{
    return(
       <Fragment>
         <Layout image={photo}>
         <Sectional/>
         <Featured/>
         <Sectional/>
         <Upcoming/>
         </Layout>
       </Fragment>
    )
}

export default Home;