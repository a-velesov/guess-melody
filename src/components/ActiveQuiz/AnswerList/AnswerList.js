import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';
import './AnswerList.css'

export const AnswerList = (props) => {
  return (
    <div className='col-md-6'>
      <ul className='answer-list item-list list-group'>
        <AnswerItem />
      </ul>
    </div>
  );
};
