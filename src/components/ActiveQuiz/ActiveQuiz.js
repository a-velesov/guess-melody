import React, { Component } from 'react';
import './ActiveQuiz.css';
import { QuizQuestion } from './QuizQuestion/QuizQuestion';
import { NavBar } from '../Navigation/NavBar';
import { AnswerBlock } from './AnswerList/AnswerBlock';
import ReactDOM from 'react-dom';

export class ActiveQuiz extends Component {

  state = {
    answerId: null,
    answerStatus: false,
  };

  successAudio = new Audio('/audio/success.mp3');
  errorAudio = new Audio('/audio/error.mp3');

  onClickAnswerId = (id) => {
    this.setState({
      answerId: id,
    });

    if(this.props.question.id === id) {
      this.successAudio.play();
      this.setState({
        answerStatus: {
          ...this.state.answerStatus,
          [id]: 'success',
        },
      });
    } else {
      this.errorAudio.play();
      this.setState({
        answerStatus: {
          ...this.state.answerStatus,
          [id]: 'error',
        },
      });
    }
  };

  componentDidUpdate(prevProps) {
    if(this.props.activeQuestion !== prevProps.activeQuestion) {
      this.setState({
        answerId: null,
        answerStatus: false,
      });
    }
  }

  render() {
    let status = Object.values(this.state.answerStatus).find(key => key === 'success');

    return (
      <>
      <NavBar />

      <QuizQuestion
        question={ this.props.question }
        answerId={ this.state.answerId }
        answerStatus={ this.state.answerStatus }
      />

      <div className='answer-blocks row'>

      <AnswerBlock
        answer={ this.props.questions }
        click={ this.onClickAnswerId }
        answerId={ this.state.answerId }
        answerStatus={ this.state.answerStatus }
      />

      </div>

      <button onClick={ status ? this.props.onClickActiveQuestion : null } className={ `btn ${ status ? 'success' : null }` }>Next</button>

    </>
    );
  }
}
