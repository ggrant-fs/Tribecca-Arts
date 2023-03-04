import React,{Fragment} from 'react';
import painting from '../images/featuredpainting.jpg';
import painting2 from '../images/featuredpainting2.jpg';
import painting3 from '../images/featuredpainting3.jpg';

const Featured =(props)=>{
    return(
       <Fragment>
       <div className='featured-container'>
         <div className='featured__jewelry'>
         <img src={painting2} alt='' className='featured__img'/>
         </div>
         <div className='featured__paintings'>
          <img src={painting} alt='' className='featured__img'/>
         </div>
         <div className='featured__sculptures'>
         <img src={painting3} alt='' className='featured__img'/>
         </div>
       </div>
       </Fragment>
    )
}

export default Featured;