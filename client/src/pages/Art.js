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
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
     </div>
     <div className='art-container'>
     <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
     </div>
     <div className='art-container'>
       <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
        <figure className='art__item'>
          <img className="art__img" src={'https://i.imgur.com/UYVmWUy.jpg'} alt=''/>
          <figcaption>caption of painting</figcaption>
        </figure>
     </div>
    </main>
   </Layout>
  )
}

export default Art
