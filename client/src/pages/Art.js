import React from 'react'
import Layout from '../componenets/Layout';
import Sectional from '../componenets/Sectional';
import statueImg from '../images/statues_exhibit.jpeg';


const Art = () => {
  return (
   <Layout image={statueImg}>
    <main>
    <Sectional/>
     <div className='art-container'>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
     </div>
     <div className='art-container'>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
     </div>
     <div className='art-container'>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
        <div className='art__item'>
          {/* <img src={} alt=''/> */}
        </div>
     </div>
    </main>
   </Layout>
  )
}

export default Art
