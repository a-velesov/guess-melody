import React from 'react';
import './AnswerItem.css';

export const AnswerItem = (props) => {


  return (
    <>
      <div className='answer col-md-6'>
      <div className="answer-list">
        <ul className='item-list list-group'>

      {
        props.name.map(key => {
          return <li key={key.name} className='list-group-item' onClick={() => props.click(key.id)}>{ key.name }</li>;
        })
      }
        </ul>
      </div>
      </div>
    </>
  );
};
