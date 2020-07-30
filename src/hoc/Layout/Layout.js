import React from 'react';
import { NavBar } from '../../components/Navigation/NavBar';
import { Score } from '../../components/Score/Score';
import { ActiveQuiz } from '../../components/ActiveQuiz/ActiveQuiz';

export const Layout = (props) => {
  return (
    <>
        <NavBar />
      <main>
        <ActiveQuiz />
      </main>
    </>
  );
};
