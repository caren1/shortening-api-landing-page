import React from 'react';
import './App.css';

import { Header, Introduction, Shortener, Statistics, CallToAction } from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <Introduction />
      {/* <Shortener/> */}
      <Statistics />
      <CallToAction />
    </div>
  );
}

export default App;
