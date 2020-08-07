import React from 'react';
import './NavBar.css';

export const NavBar = (props) => {

  return (
    <header className='header d-flex'>
    <div className='top-panel d-flex'>
      <h3>
        <a className='text-focus-in'>
          SongBird
        </a>
      </h3>
      <div>Score: { props.score }</div>
      </div>
      <ul className="pagination">
        {
          Object.values(props.type).map(item => (
            <li
              key={ item }
              className='page-item'
            >
              <a className={ `page-link ${ item === props.type[props.activeQuestion] ? 'active' : '' }` }
              >{ props.birds[item][0].stage }</a>
            </li>
          ))
        }

      </ul>
      </header>
  );
};
