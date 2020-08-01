import React, { Fragment } from 'react';
import './AnswerDetails.css';
import AudioPlayer from 'react-h5-audio-player';
import './../Player/Player.scss';

export const AnswerDetails = (props) => {
  return (
    <div className='answer-details col-md-6'>
      <div className="answer-details-card card">


        { props.answerId
          ? props.info.map(key => {
              if(key.id === props.details) {
                return (
                  <Fragment key={key.id}>
                  <div className='card-body'>
                    <img className='answer-image' src={ key.image } alt="Bird" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h2>{ key.name }</h2>
                      </li>
                      <li className="list-group-item">{ key.species }</li>
                      <li className="list-group-item">
                        <AudioPlayer layout='stacked' showJumpControls={ true } src={ key.audio } />
                      </li>
                    </ul>
                  </div>
                    <span className='card-text'>{ key.description }</span>
                  </Fragment>
                );
              }
            })
          : <p>Послушайте плеер. <br /> Выберите птицу из списка</p>
        }
      </div>
    </div>
  );
};
