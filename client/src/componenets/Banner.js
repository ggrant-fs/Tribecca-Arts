import React from 'react';
const Banner =(props)=>{
    return (
        <div className='main-banner'>
          <img src={props.bannerImg} alt='' className={'banner-img'}/>
        </div>
    )
}

export default Banner;