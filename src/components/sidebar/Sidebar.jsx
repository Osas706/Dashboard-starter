import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './Sidebar.css';

import { SidebarData } from '../../data/Data';
import {UilSignOutAlt, UilBars} from '@iconscout/react-unicons';

import {motion} from 'framer-motion'

const Sidebar = () => {
  const [selected, setSelected ] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants ={
    true: {
      left: '0'
    },

    false:{
      left: '-60%'
    }
  }

  return (
    <>
      <div 
       className='bars' 
       style={expanded ? {left: '60%'}:{left: '5%'}}
       onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>

      <motion.div 
       className='Sidebar'
       variants={sidebarVariants}
       animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
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
      </motion.div>  
    </>
  )
}

export default Sidebar
