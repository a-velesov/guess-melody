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
            if(key.id === props.answerId) {
              return <Fragment key={ key.id }>
                <div className='card-body'>
                  <img className='bird-image' src={ key.image } alt="Bird" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h4>{ key.name }</h4>
                    </li>
                    <li className="list-group-item">{ key.song }</li>
                    <li className="list-group-item">
                      <AudioPlayer
                        autoPlayAfterSrcChange={ false }
                        volume='0.5'
                        layout='stacked'
                        showJumpControls={ true }
                        src={ key.audio }
                      />
                    </li>
                  </ul>
                </div>
                <span className='card-text'>{ key.description }</span>
              </Fragment>;
            }
          })
          : <div><h3>Правила игры</h3>
            1. Послушайте песню. <br />
            2. Выберите исполнителя из списка. <br /><br />
            <h4>Подсчет баллов</h4>
            Если Вы дали правильный ответ с первой попытки, счёт увеличивается на 5 баллов. Каждая следующая попытка
            даёт на один балл меньше, если правильный ответ дан только с последней, шестой попытки, Вы получаете за него
            0 баллов. Если Вы не набрали максмимум баллов, обязательно попробуйте пройти заново и улучшить результат!
          </div>
        }
      </div>
    </div>
  );
};
