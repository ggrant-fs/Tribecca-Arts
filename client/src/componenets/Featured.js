import React,{Fragment} from 'react';

const Featured =(props)=>{
    return(
       <Fragment>
       <div className='featured-container'>
         <div className='featured__jewelry'></div>
         <div className='featured__paintings'></div>
         <div className='featured__sculptures'></div>
       </div>
       </Fragment>
    )
}

export default Featured;