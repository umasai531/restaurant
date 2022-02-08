import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
  <div className='app__aboutus_overlay flex__center'>
    <img src={images.G} alt='g letter'/>

  </div>
  <div className='app__aboutus_content flex__center'>
    <div className='app__aboutus_content_about'>
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
      <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Know More</button>
    </div>

    <div className='app__aboutus_content_knife flex__center'>
      <img src={images.knife} alt='knife'/>

    </div>
    <div className='app__aboutus_content_history'>
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
      <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
  </div>
  </div>
);

export default AboutUs;
