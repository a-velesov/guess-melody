import React, { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import '../Player/Player.scss';
import './QuizQuestion.css';
import mic from './../../../assets/img/mic.jpg';
import { Loader } from '../../Loader/Loader';

export const QuizQuestion = (props) => {

  const audioRef = useRef(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    audioRef.current.audio.current.onabort = () => {
      setLoading(true);
    };
    audioRef.current.audio.current.oncanplaythrough = () => {
      setLoading(false);
    };

    if(audioRef.current && props.rightAnswer) {
      audioRef.current.audio.current.pause();
    }
  });

  let src = [ mic ];
  let title = [ '******' ];
  Object.values(props.answerStatus).map(key => {
    if(key === 'success') {
      src.splice(0, 1, [ props.question.image ]);
      title.splice(0, 1, [ props.question.name ]);
    }
  });

  return (
    <>
      {
        loading ? <Loader /> : null
      }
      <div className='random-bird jumbotron rounded'>

        <img className='bird-image' src={ src } alt="Bird" />

        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            <h2 className='birds-name'>
              { title }
            </h2>
          </li>
          <li className="list-group-item">
            <AudioPlayer layout='horizontal'
                         volume='0.4'
                         ref={ audioRef }
                         autoPlayAfterSrcChange={ false }
                         showJumpControls={ false }
                         src={ props.question.audio }
            />
          </li>
        </ul>
      </div>
    </>
  );
};
