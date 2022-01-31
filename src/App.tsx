import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Documentation from './features/documentation/Documentation';
import HomePage from './features/home/HomePage';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/documentation' element={<Documentation />} />
    </Routes>
  );
};

export default App;
