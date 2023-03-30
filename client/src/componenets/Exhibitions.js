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
                <h1 className='exhibition__title'>Andy Worhal</h1>
                <p className='exhibition__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <hr/>
            </div>
          
            <div className="exhibition__img_wrapper">
              <img src={exhibition2} alt='' className='exhibition__img'/>
              <div className='exhibition__description'>
                <h1 className='exhibition__title'>Banksy</h1>
                <p className='exhibition__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <hr/>
            </div>

            <div className="exhibition__img_wrapper">
              <img src={exhibition3} alt='' className='exhibition__img'/>
              <div className='exhibition__description'>
                <h1 className='exhibition__title'>Helen Frankenthaler</h1>
                <p className='exhibition__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default Exhibitions;


