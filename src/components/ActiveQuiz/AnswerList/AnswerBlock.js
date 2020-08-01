import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';
import { AnswerDetails } from '../AnswerDetails/AnswerDetails';

export const AnswerBlock = (props) => {

  return (
    <>
      <AnswerItem click={props.click} name={ props.answer } />
      <AnswerDetails details={props.answerId} info={ props.answer } answerId={props.answerId} />
      </>
  );
};
