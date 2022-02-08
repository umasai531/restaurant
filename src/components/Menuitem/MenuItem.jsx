import React from 'react';

import './MenuItem.css';

const MenuItem = (props) => (
  <div className='app__menuitem'>
   <div className='app__menuitem_head'>
     <div className='app__menuitem_name'>
       <p className='p__cormorant' style={{color:'whitesmoke'}}>{props.title}</p>

     </div>
     <div className='app__menuitem_dash'/>
     
     <div className='app__menuitem_price'>
       <p className='p__cormorant' style={{color:'whitesmoke'}}>{props.price}</p>

     </div>
     
   </div>
   <div className='app__menuitem_sub'>
       <p className='p__opensans' style={{color:'grey'}}>{props.tags}</p>

     </div>
  </div>
);

export default MenuItem;
