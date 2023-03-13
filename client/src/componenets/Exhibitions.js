import React,{Fragment} from 'react';
import exhibition1 from '../images/andywarhol.jpeg';
import exhibition2 from '../images/banksy.jpeg';
import exhibition3 from '../images/helen_frankenthaler.jpeg';

const Exhibitions =(props)=>{
    return (
        <Fragment>
          <div className="exhibition-container">
            <div className="exhibition__img_wrapper">
              <img src={exhibition1} alt='' className='exhibition__img'/>
              <div className='exhibition__description'>
                <h1 className='exhibition__title'>title of exhibition</h1>
                <p>
                  description of the exhibition
                </p>
              </div>
              <hr/>
            </div>
            <div className="exhibition__img_wrapper">
              <img src={exhibition2} alt='' className='exhibition__img'/>
              <div className='exhibition__description'>
                <h1 className='exhibition__title'>title of exhibition</h1>
                <p>
                  description of the exhibition
                </p>
              </div>
              <hr/>
            </div>
            <div className="exhibition__img_wrapper">
              <img src={exhibition3} alt='' className='exhibition__img'/>
              <div className='exhibition__description'>
                <h1 className='exhibition__title'>title of exhibition</h1>
                <p>
                  description of the exhibition
                </p>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default Exhibitions;


