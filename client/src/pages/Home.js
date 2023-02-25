import React,{Fragment} from 'react';
import Layout from '../componenets/Layout';
// import Banner from '../componenets/Banner';
import photo from '../images/banner.jpg';
import Sectional from '../componenets/Sectional';
const Home =(props)=>{
    return(
       <Fragment>
         <Layout image={photo}>
         {/* <Banner image={photo}/> */}
        <Sectional/>
         </Layout>
       </Fragment>
    )
}

export default Home;