import React from 'react';
import './FinishedQuiz.css';
import win from './../../assets/img/win.gif';

export const FinishedQuiz = (props) => {
  return (

    <div className='finish jumbotron rounded'>
      <h2>Поздравляем!</h2>
      <div className='results'> Вы набрали { props.score } баллов из 30</div>

      {
        props.score === 30
          ? <div>Отличный результат! <br /><br /> <img src={ win } alt="Win" /></div>
          : <button onClick={ () => props.retryQuiz() } className='retry btn success'>Попробовать еще раз</button>
      }

    </div>
  );
};
