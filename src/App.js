import React from 'react';
import './App.css';

import { Header, Introduction, Statistics, CallToAction, Footer } from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <Introduction />
      {/* <Shortener/> */}
      <Statistics />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
