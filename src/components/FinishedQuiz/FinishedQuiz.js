import React from 'react';
import './FinishedQuiz.css'

export const FinishedQuiz = (props) => {
  return (

    <div className='finish jumbotron rounded'>
      <h2>Поздравляем!</h2>
      <div className='results'> Вы набрали {props.score} из 30</div>

      {
        props.score === 30
          ? <div>Отличный результат! Сам Дроздов вам завидует!</div>
          : <button className='retry btn success'>Попробовать еще раз</button>
      }

    </div>
    // else максимальное кол-во баллов
  );
};
