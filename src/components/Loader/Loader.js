import React from 'react';
import './Loader.css';
import loader from './../../assets/img/loader.gif'

export const Loader = () => {
  return (
    <div className='loader'>
    <img className='loader-image' src={loader} alt="Loader" />
    </div>
  );
};
