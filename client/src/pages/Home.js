import React,{Fragment} from 'react';
import Layout from '../componenets/Layout';
import photo from '../images/museum2.jpeg';
import Sectional from '../componenets/Sectional';
import Featured from '../componenets/Featured';
import Exhibitions from '../componenets/Exhibitions';
const Home =(props)=>{
    return(
       <Fragment>
         <Layout image={photo}>
         <Sectional/>
         {/* <Featured/> */}
         <Sectional/>
         <Exhibitions/>
         </Layout>
       </Fragment>
    )
}

export default Home;