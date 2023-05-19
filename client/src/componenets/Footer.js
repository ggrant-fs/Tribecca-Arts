import React from 'react';
import { Fragment } from 'react';
const Footer =(props) =>{
    return(
          <div className="footer">
            <Fragment>
                <div className='footer-menu'>
                   <div className='footer-items'>
                      <ul>
                        <li className='footer__item'>About</li>
                        <li className='footer__item'>Membership</li>
                        <li className='footer__item'>Volunteer</li>
                      </ul>
                   <hr className='line-break'/>
                   </div>
                   <div className='footer-items'>
                      <ul>
                        <li className='footer__item'>Careers</li>
                        <li className='footer__item'>Internships</li>
                        <li className='footer__item'>Exhibitions</li>
                      </ul>
                    <hr className='line-break'/>
                   </div>
                     <ul>
                     <div className='footer-items'>
                        <li className='footer__item'>Press</li>
                        <li className='footer__item'>Support</li>
                        <li className='footer__item'>Donate</li>
                     </div>
                     <hr className='line-break'/>
                     </ul>
                </div>
            </Fragment>
          </div>
    )
}

export default Footer;