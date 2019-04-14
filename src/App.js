import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Nav from './components/Nav';


class App extends Component {
  componentDidMount() {
    fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0')
    .then(res => res.json())
    .then(({articles}) => this.props.dispatch({type:"ADD_ARTICLES",payload:articles})
    )}

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Signup} />
          <Route exact path='/login' component={Signin} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App);
