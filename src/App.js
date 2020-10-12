import React from 'react';
import { Counter } from './Counter';
import { Accordian } from './Accordian';
import PropTypes from 'prop-types';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <HelloWorld name="Aaron" greeting="Yo" />
        <HelloWorld name="World" />
      </header> */}
      <Counter />
      <Accordian />
    </div>
  );
}

function HelloWorld({ name, greeting = 'Hello' }) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
};

export default App;
