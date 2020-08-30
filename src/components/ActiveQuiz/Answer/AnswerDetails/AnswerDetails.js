import React from 'react';
import './AnswerDetails.css';
import { AnswerDescription } from './AnswerDescription/AnswerDescription';

export const AnswerDetails = (props) => {
  return (
    <div className='answer-details col-md-6'>
      <div className="answer-details-card card">
        { props.answerId
          ? props.info.map(key => {
            if(key.id === props.answerId) {
              return <AnswerDescription
                key={ key.id }
                srcImage={ key.image }
                name={ key.name }
                song={ key.song }
                srcAudio={ key.audio }
                description={key.description} />
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
