import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './404/NotFound';
import Documentation from './documentation/Documentation';
import HomePage from './home/HomePage';
import * as Hooks from '../redux/hooks';
import './common/styles/styles.scss';
import './common/styles/darkMode.scss';

const App = (): JSX.Element => {
  const state = Hooks.useAppSelector((state) => state.app);
  const currentTheme = state.currentTheme;

  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', currentTheme === 'dark-mode');
  }, [currentTheme]);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/documentation" element={<Documentation />} />
    </Routes>
  );
};

export default App;
