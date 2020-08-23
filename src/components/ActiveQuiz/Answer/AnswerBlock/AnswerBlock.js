import React from 'react';
import { AnswerItem } from '../AnswerItem/AnswerItem';
import { AnswerDetails } from '../AnswerDetails/AnswerDetails';
import './AnswerBlock.css';

export const AnswerBlock = (props) => {

  let status = Object.values(props.answerStatus).find(key => key === 'success');

  return (
    <>
      <div className='answer-blocks row'>
        <AnswerItem click={ props.click }
                    answer={ props.answer }
                    answerStatus={ props.answerStatus }
                    answerId={ props.answerId ? props.answerId : '' }
        />
        <AnswerDetails info={ props.answer } answerId={ props.answerId } />
      </div>


      <button
        onClick={ status ? props.onClickActiveQuestion : null }
        className={ `btn ${ status ? 'success' : '' }` }
      >Next
      </button>
    </>
  );
};
