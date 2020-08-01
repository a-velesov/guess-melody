import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './../Player/Player.scss';
import './QuizQuestion.css';
import birdsNone from './../../../assets/img/birdsNone.jpg'

export const QuizQuestion = (props) => {

  const rightAnswer = () => {
    if(props.question.id === props.answerId)
      return true
  }

  return (
    <div className='random-bird jumbotron rounded'>
      {
        rightAnswer()
          ? <img className='bird-image' src={ props.question.image } alt="Bird" />
          : <img className='bird-image' src={ birdsNone } alt="Bird" />
      }

       <ul className="list-group list-group-flush">

            <li className="list-group-item">
              <h2>
              {
                rightAnswer() ? props.question.name : '*****'
              }
              </h2>
            </li>
            <li className="list-group-item">
              <AudioPlayer layout='horizontal' showJumpControls={ false } src={props.question.audio} />
            </li>
       </ul>
    </div>
  );
};
