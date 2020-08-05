import React from 'react';
import './NavBar.css'

export const NavBar = (props) => {

  return (
    <header className='header d-flex'>
    <div className='top-panel d-flex'>
      <h3>
        <a className='text-focus-in'>
          SongBird
        </a>
      </h3>
      <div>Score: {props.score}</div>
      </div>
      <ul className="pagination">
        {
          Object.values(props.type).map(key => (
            <li className='page-item'>
              <a className={ `page-link ${key === props.type[props.activeQuestion] ? 'active' : ''}`  }
              >{ props.birds[key][0].stage }</a>
            </li>

          ))
        }

{/*        {
          navItem.map(key => (
            <li className='page-item'>
              <a data-link='train' className='page-link'>{ key }</a>
            </li>
          ))
        }*/}

       {/* <li className='page-item'>
          <a data-link='sparrows' className='page-link'>Воробьиные</a>
        </li>
        <li className='page-item'>
          <a data-link='forest' className='page-link'>Лесные</a>
        </li>
        <li className='page-item'>
          <a data-link='singers' className='page-link'>Певчие</a>
        </li>
        <li className='page-item'>
          <a data-link='predator' className='page-link'>Хищные</a>
        </li>
        <li className='page-item'>
          <a data-link='sea' className='page-link'>Морские</a>
        </li>*/}
      </ul>
      </header>
  );
};
