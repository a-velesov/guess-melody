import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';
import { AnswerDetails } from '../AnswerDetails/AnswerDetails';

export const AnswerBlock = (props) => {
  const onClickDetails = () => {

  }


  return (
    <>
      <AnswerItem onClickDetails={onClickDetails} name={ props.answer } />
      <AnswerDetails onClickDetails={onClickDetails} description={props.answer} />
      </>
  );
};
