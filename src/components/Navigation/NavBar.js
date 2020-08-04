import React from 'react';
import './NavBar.css'

export const NavBar = (props) => {
  return (
    <header className='header d-flex'>
    <div className='top-panel d-flex'>
      <h3>
        <a href="#">
          Song Bird
        </a>
      </h3>
      <div>Score: {props.score}</div>
      </div>
      <ul className="pagination">
        <li className='page-item'>
          <a className='page-link'>Хищные</a>
        </li>
        <li className='page-item'>
          <a className='page-link'>Морские</a>
        </li>
        <li className='page-item'>
          <a className='page-link'>Приезжие</a>
        </li>
      </ul>
      </header>
  );
};
