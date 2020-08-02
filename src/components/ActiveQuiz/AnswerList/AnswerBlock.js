import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';
import { AnswerDetails } from '../AnswerDetails/AnswerDetails';

export const AnswerBlock = (props) => {

  return (
      <>
      <AnswerItem click={ props.click } answer={ props.answer } answerStatus={ props.answerStatus } answerId={ props.answerId ? props.answerId : '' } />
      <AnswerDetails info={ props.answer } answerId={ props.answerId } />
      </>
  );
};
