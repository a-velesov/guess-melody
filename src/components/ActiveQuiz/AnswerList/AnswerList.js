import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';

export const AnswerList = (props) => {
  return (
    <>
      <ul className='item-list list-group'>
        <AnswerItem />
      </ul>
    </>
  );
};
