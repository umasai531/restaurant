import React from 'react';
import { SubHeading } from '..';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newletter_heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Suscribe To Our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
    </div>
    <div className='app__newsletter_input flex__center'>
      <input type='email' placeholder='Enter your e-mail address'/>
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
