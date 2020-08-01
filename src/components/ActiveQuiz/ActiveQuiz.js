import React from 'react';
import './ActiveQuiz.css';
import { QuizQuestion } from './QuizQuestion/QuizQuestion';
import { NavBar } from '../Navigation/NavBar';
import { AnswerBlock } from './AnswerList/AnswerBlock';

export const ActiveQuiz = (props) => {

  const randomQuestion = () => {
    let idx = Math.floor(Math.random() * Math.floor(6));
    return props.questions[idx]
  }

/*  { props.questions.map((key, i) => {

    /!*          const questionItem = Object.entries(key).forEach(([k, ind]) => {
     return console.log(k ,ind)
     })*!/


    //console.log(questionItem[idx]);
    console.log('key', key);


    return <QuizQuestion
      id={key.id}
      name={key.name}
      species={key.species}
      image={key.image}
      audio={key.audio}
    />
  })
  }*/

  return (
    <>
      <NavBar />

      <QuizQuestion question={randomQuestion()} />

      <div className='answer-blocks row'>

      <AnswerBlock answer={props.questions} />


      </div>
      <button className='btn'>Next</button>
    </>
  );
};
