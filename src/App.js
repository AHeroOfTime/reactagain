import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';
// import { Counter } from './Counter';
// import { Accordian } from './Accordian';
// import { Input } from './Input';
// import PropTypes from 'prop-types';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
      {/* <header className="App-header">
        <HelloWorld name="Aaron" greeting="Yo" />
        <HelloWorld name="World" />
      </header> */}
      {/* <Input />
      <Counter />
      <Accordian /> */}
    </div>
  );
}

// function HelloWorld({ name, greeting = 'Hello' }) {
//   return (
//     <h1>
//       {greeting} {name}!
//     </h1>
//   );
// }

// HelloWorld.propTypes = {
//   name: PropTypes.string,
//   greeting: PropTypes.string,
// };

export default App;
