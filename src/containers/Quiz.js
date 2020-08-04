import React, { Component } from 'react';
import { QuizQuestion } from '../components/ActiveQuiz/QuizQuestion/QuizQuestion';
import { AnswerBlock } from '../components/ActiveQuiz/AnswerList/AnswerBlock';
import { NavBar } from '../components/Navigation/NavBar';
import { FinishedQuiz } from '../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {

  state = {
    answerId: null,
    answerStatus: false,
    score: 0,
    rightAnswer: false
  };

  successAudio = new Audio('/audio/success.mp3');
  errorAudio = new Audio('/audio/error.mp3');

  onClickAnswerStatus = (id) => {
    this.setState({
      answerId: id,
    });

    if(!this.state.rightAnswer){
    if(this.props.question.id === id) {
      this.successAudio.play();
      this.setState({
        answerStatus: {
          ...this.state.answerStatus,
          [id]: 'success',
        },
      });
      this.scoreSummary();
    } else {
      this.errorAudio.play();
      this.setState({
        answerStatus: {
          ...this.state.answerStatus,
          [id]: 'error',
        },
      });
    }}
  };

  scoreSummary = () => {
    let error = Object.values(this.state.answerStatus);
    let score = 5 - error.length;
      this.setState({
        ...this.state.score,
        score: this.state.score + score,
        rightAnswer: true,
      });
  };

  resetState = () => {
    this.props.retryQuiz();
    this.setState({
      score: 0
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.activeQuestion !== prevProps.activeQuestion) {
      this.setState({
        answerId: null,
        answerStatus: false,
      });
    }
  }

  render() {
     return (
      <>
        <NavBar score={this.state.score} />
         {
           this.props.isFinished
             ? <FinishedQuiz
               score={this.state.score}
               retryQuiz={this.resetState}
             />
             : <>
             <QuizQuestion
               question={ this.props.question }
               answerId={ this.state.answerId }
               answerStatus={ this.state.answerStatus }
             />

             <AnswerBlock
             answer={ this.props.questions }
             click={ this.onClickAnswerStatus }
             answerId={ this.state.answerId }
             answerStatus={ this.state.answerStatus }
             onClickActiveQuestion={this.props.onClickActiveQuestion}
             />
             </>
         }
    </>
    );
  }
}

export default Quiz;