import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './../Player/Player.scss'
import './QuizQuestion.css'

export const QuizQuestion = (props) => {
  return (
    <div className='random-bird jumbotron rounded'>
      <img className='bird-image' src="https://via.placeholder.com/200x155.png" alt="Bird" />
       <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h2>*****</h2>
            </li>
            <li className="list-group-item">
              <AudioPlayer layout='horizontal' showJumpControls={false} src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3" />
            </li>
       </ul>
    </div>
  );
};
