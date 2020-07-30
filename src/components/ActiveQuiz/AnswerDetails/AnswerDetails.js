import React from 'react';
import './AnswerDetails.css';
import AudioPlayer from 'react-h5-audio-player';
import './../Player/Player.scss'

export const AnswerDetails = (props) => {
  return (
    <div className='answer-details col-md-6'>
      <div className="answer-details-card card">
      <div className='card-body'>
        <img className='answer-image' src="https://via.placeholder.com/200x155.png" alt="Bird" />
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h2>Воробей</h2>
            </li>
          <li className="list-group-item">Latin</li>
            <li className="list-group-item">
              <AudioPlayer layout='stacked' showJumpControls={true} src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3" />
            </li>
      </ul>
      </div>
        <span className='card-text'>Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.</span>
      </div>
    </div>
  );
};
