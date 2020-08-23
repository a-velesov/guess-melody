import React from 'react';
import './AnswerItem.css';

export const AnswerItem = (props) => {
  return (
    <>
      <div className='answer col-md-6'>
        <div className="answer-list">
          <ul className='item-list list-group'>
            {
              props.answer.map(key => {
                return <li key={ key.id }
                           className='list-group-item'
                           onClick={ () => props.click(key.id) }
                >
                  <i className={ `answer-status ${ props.answerStatus[key.id] ? props.answerStatus[key.id] : '' }` } />
                  { key.name }
                </li>;
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
};
