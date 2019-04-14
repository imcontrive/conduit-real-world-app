import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Tags extends Component {

  componentDidMount() {
    fetch('https://conduit.productionready.io/api/tags')
    .then(res => res.json())
    .then(({tags}) => this.props.dispatch({type:"ADD_TAGS",payload:tags})
    )}

  // handleTags for filtering articles by tags
  handleTags = (tag) => {
    fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=${tag}`)
      .then(res => res.json())
      .then(({articles}) => this.props.dispatch({type:"FILTER_BY_TAGS",payload:articles,tag})
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
                <p onClick= {()=> this.handleTags(tag)} >{tag}</p>
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
