import React,{Fragment} from 'react';
import Layout from '../componenets/Layout';
import photo from '../images/museum2.jpeg';
import Sectional from '../componenets/Sectional';
import Featured from '../componenets/Featured';
import Exhibitions from '../componenets/Exhibitions';
const Home =(props)=>{
    return(
       <Fragment>
         <Layout className="home-banner"image={photo}>
      
         <Sectional>
          <h3 className="section-title">Featured Artist</h3>
         </Sectional>
         <Featured/>
         <Sectional>
          <h3 className="section-title">New Exhibitions</h3>
         </Sectional>
         <Exhibitions/>
         </Layout>
       </Fragment>
    )
}

export default Home;