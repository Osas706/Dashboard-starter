import React from 'react';
import './RightSide.css';
import Updates from '../updates/Updates';
import Reviews from '../reviews/Reviews';

const RightSide = () => {
  return (
    <div className='RightSide'>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>

      <div>
        <h3>Customer Review</h3>
        <Reviews />
      </div>
    </div>
  )
}

export default RightSide
