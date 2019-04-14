import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Tags extends Component {

  componentDidMount() {
    fetch('https://conduit.productionready.io/api/tags')
    .then(res => res.json())
    .then(({tags}) => this.props.dispatch({type:"ADD_TAGS",payload:tags})
    )}
  render() {
    const {tags} = this.props;
    return (
        <section>
          <div className="tag-container">
            <h4>Popular Tags</h4>
            <div className="tags">
             {
               tags.map(tag => (
                <p>{tag}</p>
               ))
             }
            </div>
            
          </div>
        </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    tags: state.tags,
  }
}

export default connect(mapStateToProps)(Tags);
