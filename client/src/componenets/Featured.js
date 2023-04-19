import React,{Fragment} from 'react';
import painting1 from '../images/van_gogh_starry_night.png';
import painting2 from '../images/van_gogh.jpeg';
import painting3 from '../images/Van-Gogh_Sunflowers.png';

const Featured =(props)=>{
    return(
       <Fragment>
       <div className='featured-container'>
         <div className='featured__paintings'>
         <img src={painting1} alt='' className='featured__img'/>
         </div>
         <div className='featured__paintings'>
          <img src={painting2} alt='' className='featured__img'/>
         </div>
         <div className='featured__paintings'>
         <img src={painting3} alt='' className='featured__img'/>
         </div>
       </div>
       </Fragment>
    )
}

export default Featured;