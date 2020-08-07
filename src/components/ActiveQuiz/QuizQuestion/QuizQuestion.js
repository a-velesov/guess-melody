import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './../Player/Player.scss';
import './QuizQuestion.css';
import birdsNone from './../../../assets/img/birdsNone.jpg';

export const QuizQuestion = (props) => {

  let src = [ birdsNone ];
  let title = [ '******' ];
  Object.values(props.answerStatus).map(key => {
    if(key === 'success') {
      src.splice(0, 1, [ props.question.image ]);
      title.splice(0, 1, [ props.question.name ]);
    }
  });

  return (
    <div className='random-bird jumbotron rounded'>

      <img className='bird-image' src={ src } alt="Bird" />

       <ul className="list-group list-group-flush">

            <li className="list-group-item">
              <h2 className='birds-name'>
                { title }
              </h2>
            </li>
            <li className="list-group-item">
              <AudioPlayer layout='horizontal'
                           volume='0.5'
                           autoPlayAfterSrcChange={false}
                           showJumpControls={ false }
                           src={ props.rightAnswer ? '' : props.question.audio }
              />
            </li>
       </ul>
    </div>
  );
};
