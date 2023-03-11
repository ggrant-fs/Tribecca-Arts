import React,{Fragment} from 'react';
// import statue3 from '../images/statueImg3.jpg';
import exhibition1 from '../images/statues_exhibit.jpeg';
const Upcoming =(props)=>{
    return (
        <Fragment>
          <div className="exhibition-container">
            <div className="exhibition__img_wrapper">
              <img src={exhibition1} alt='' className='exhibition__img'/>
            </div>
          </div>
        </Fragment>
    )
}

export default Upcoming;


