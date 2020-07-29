import React from 'react';
import { NavBar } from '../../components/Navigation/NavBar';
import { Score } from '../../components/Score/Score';
import { ActiveQuiz } from '../../components/ActiveQuiz/ActiveQuiz';

export const Layout = (props) => {
  return (
    <div>
      <header>
        <div>
          <img src="" alt="Logo" />
          <Score />
        </div>
        <NavBar />
      </header>
      <main>
        <ActiveQuiz />
      </main>
    </div>
  );
};
