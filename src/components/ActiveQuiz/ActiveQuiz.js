import React, { Component } from 'react';
import './ActiveQuiz.css';
import { QuizQuestion } from './QuizQuestion/QuizQuestion';
import { NavBar } from '../Navigation/NavBar';
import { AnswerBlock } from './AnswerList/AnswerBlock';

export class ActiveQuiz extends Component {

  state = {
    answerId: null
  }


  onClickAnswerId = (id) => {
    this.setState({
      answerId: id
    })
  }

  render() {


  /*  { props.questions.map((key, i) => {

    /!*          const questionItem = Object.entries(key).forEach(([k, ind]) => {
     return console.log(k ,ind)
     })*!/


    //console.log(questionItem[idx]);
    console.log('key', key);


    return <QuizQuestion
      id={key.id}
      name={key.name}
      species={key.species}
      image={key.image}
      audio={key.audio}
    />
  })
  }*/

  return (
    <>
      <NavBar />

      <QuizQuestion
        question={this.props.question}
        answerId={this.state.answerId}
      />

      <div className='answer-blocks row'>

      <AnswerBlock
        answer={this.props.questions}
        click={this.onClickAnswerId}
        answerId={this.state.answerId}
      />


      </div>
      <button className='btn'>Next</button>
    </>
  );
  }
};
