import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';
import './AnswerList.css'

export const AnswerList = (props) => {
  return (
    <div className='answer col-md-6'>
      <div className="answer-list">
      <ul className='item-list list-group'>
        <AnswerItem />
      </ul>
        </div>
    </div>
  );
};
