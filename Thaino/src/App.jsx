import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Summarize from './Summarize.jsx';
import About from './About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="background">
        <Header />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/summarize">Summarize</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/summarize" component={Summarize} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;