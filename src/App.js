import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Home from './components/Home';

class App extends Component {
  componentDidMount() {
    fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0')
    .then(res => res.json())
    .then(({articles}) => this.props.dispatch({type:"ADD_ARTICLES",payload:articles})
    )}

  render() {
    return (
      <Home/>
    )
  }
}

export default connect()(App);
