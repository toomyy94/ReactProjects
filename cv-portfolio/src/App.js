import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { CV } from './components/CV';
import { Portfolio } from './components/Portfolio';
import { NotFound } from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={CV} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
