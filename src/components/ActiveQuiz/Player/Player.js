import React from 'react';
import './Player.scss';
import AudioPlayer from 'react-h5-audio-player';
import './Player.scss';

export const Player = (props) => {
  return <AudioPlayer showJumpControls={ false } layout='stacked-reverse'  />
};
