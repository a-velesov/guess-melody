import React from 'react';
import './AnswerDescription.css';
import AudioPlayer from 'react-h5-audio-player';
import './../../../Player/Player.scss';

export const AnswerDescription = (props) => {
  return (
    <>
        <div className='card-body'>
          <img className='bird-image' src={ props.srcImage } alt="Bird" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{ props.name }</h4>
            </li>
            <li className="list-group-item">{ props.song }</li>
            <li className="list-group-item">
              <AudioPlayer
                autoPlayAfterSrcChange={ false }
                volume='0.5'
                layout='stacked'
                showJumpControls={ true }
                src={ props.srcAudio }
              />
            </li>
          </ul>
        </div>
        <span className='card-text'>{ props.description }</span>
    </>
  );
};
