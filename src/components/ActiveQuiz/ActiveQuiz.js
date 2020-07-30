import React from 'react';
import { QuizQuestion } from './QuizQuestion/QuizQuestion';
import { AnswerList } from './AnswerList/AnswerList';
import { AnswerDetails } from './AnswerDetails/AnswerDetails';

export const ActiveQuiz = (props) => {
  return (
    <>
      <QuizQuestion />

      <div className='row'>

      <AnswerList />
      <AnswerDetails />

      </div>
      <button className='btn'>Next</button>

    </>
  );
};
