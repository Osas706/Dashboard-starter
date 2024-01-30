import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './Sidebar.css';

import { SidebarData } from '../../data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';

const Sidebar = () => {
  const [selected, setSelected ] = useState(0)
  return (
    <div className='Sidebar'>
      <div className="logo">
        <img src={Logo} />
        <span>Sh<span>o</span>ps</span>
      </div>

      <div className="menu">
       {SidebarData.map((item, index) => (
         <div 
          className={selected===index ? 'menuItem active' : 'menuItem'} 
          key={index} 
          onClick={() => setSelected(index)}
        >
           <item.icon />
           <span>{item.heading}</span>
         </div>
       ))}

       <div className="menuItem">
         <UilSignOutAlt />
       </div>
      </div>


    </div>
  )
}

export default Sidebar