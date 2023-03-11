import React from 'react';
// import videoBanner from '../videos/videoBanner.mp4';
const Banner =(props)=>{
    return (
        <div className='main-banner'>
          <img src={props.bannerImg} alt='' className={'banner-img'}/>
        </div>
    )
}

export default Banner;