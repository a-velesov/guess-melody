import React, { Component } from 'react';
import './ActiveQuiz.css';
import { QuizQuestion } from './QuizQuestion/QuizQuestion';
import { NavBar } from '../Navigation/NavBar';
import { AnswerBlock } from './AnswerList/AnswerBlock';

export class ActiveQuiz extends Component {

  state = {
    answerId: null,
    answerStatus: false,
  }




  onClickAnswerId = (id) => {
    this.setState({
      answerId: id
    })

    if(this.props.question.id === id) {
      this.setState({
        answerStatus: {[id]: 'success' }
      })
    } else {
      this.setState({
        answerStatus: {[id]: 'error'}
      })
    }
  }

  render() {

  return (
    <>
      <NavBar />

      <QuizQuestion
        question={this.props.question}
        answerId={this.state.answerId}
        answerStatus={this.state.answerStatus}
      />

      <div className='answer-blocks row'>

      <AnswerBlock
        answer={this.props.questions}
        click={this.onClickAnswerId}
        answerId={this.state.answerId}
        answerStatus={this.state.answerStatus}
      />


      </div>
      <button className='btn'>Next</button>
    </>
  );
  }
};
