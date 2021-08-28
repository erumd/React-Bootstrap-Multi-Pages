import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from './components/pages/Home';
import {About} from './components/pages/About';
import {Contact} from './components/pages/Contact';
import {NoMatch} from './components/pages/NoMatch';
import {Layout} from './components/Layout'
import {Bootstrapcard} from './components/Bootstrapcard';
import {Navigation} from './components/Navbar';



function App() {
  return (
    // React.Fragment creates a wrapper so don;t have to create a div to wrap everything OR <>
    <>
      <Navigation />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />

        </Switch>
     
       

      </Router>
      </Layout>
    </>
   
  );
}

export default App;
