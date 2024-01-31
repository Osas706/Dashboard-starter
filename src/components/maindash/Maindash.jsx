import React from 'react';
import './Maindash.css';
import Cards from '../cards/Cards';
import BasicTable from '../table/BasicTable';


const Maindash = () => {
  return (
    <div className='Maindash'>
      <h1>Dashboard</h1>
      <Cards />

      <BasicTable />
    </div>
  )
}

export default Maindash
