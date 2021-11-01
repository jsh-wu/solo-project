import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import ScoreBoard from './AddScore';
import ScorePage from './ScorePage';
import Error from '../components/Error';
import Navbar from './Navbar';
import ViewScores from './ViewScores';

function App(){
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path = '/' component={ScorePage} exact/>
        <Route path = '/score' component={ScoreBoard} />
        <Route path = '/view' component={ViewScores} />
        <Route component = {Error} />
      </Switch>
    </main>
  );
};

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));