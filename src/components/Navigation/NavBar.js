import React from 'react';
import './NavBar.css'
import { Score } from '../Score/Score';

export const NavBar = (props) => {
  return (
    <header className='header d-flex'>
    <div className='top-panel d-flex'>
      <h3>
        <a href="#">
          Song Bird
        </a>
      </h3>
      <Score />
      </div>
      <ul className="pagination">
        <li className='page-item'>
          <a className='page-link' href="#">Хищные</a>
        </li>
        <li className='page-item'>
          <a className='page-link' href="#">Морские</a>
        </li>
        <li className='page-item'>
          <a className='page-link' href="#">Приезжие</a>
        </li>
      </ul>
      </header>
  );
};
