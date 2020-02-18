import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav      from './components/Nav';
import Home     from './components/Home';
import Footer   from './components/Footer';
import Contact  from './components/Contact';
import About    from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
