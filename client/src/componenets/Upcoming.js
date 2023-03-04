import React from 'react';
import statue1 from '../images/statueImg1.jpg';
import statue3 from '../images/statueImg3.jpg';
const Upcoming =(props)=>{
    return (
        <div>
          <div className="upcoming-auctions">
            <div className="upcoming__date">
              <img src={statue3} alt='' className='upcoming__imgs'/>
            </div>
            <div className="upcoming__date">
              <img src={statue1} alt='' className='upcoming__imgs'/>
            </div>
          </div>
        </div>
    )
}

export default Upcoming;


