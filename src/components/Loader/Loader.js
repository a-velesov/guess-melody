import React from 'react';
import { BoxLoading } from 'react-loadingg';
import './Loader.css';
import loader from './../../assets/img/loader.gif'

export const Loader = (props) => {
  return (
    <div className='loader'>
    <img className='loader-image' src={loader} alt="Loader" />
    </div>
  );
};
