import React from 'react';
import './App.css';

import { Header, Introduction, Shortener, Statistics } from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <Introduction />
      {/* <Shortener/> */}
      <Statistics />
    </div>
  );
}

export default App;
