import React, { Component } from 'react';
import {connect} from 'react-redux';
import Tags from './Tags';
import Nav from './Nav';

class Home extends Component {

  componentDidMount() {
    fetch('https://conduit.productionready.io/api/tags')
    .then(res => res.json())
    .then(({tags}) => this.props.dispatch({type:"ADD_TAGS",payload:tags})
    )}
  
  render() {
    const {articles,filterTags} = this.props;
    let a = (filterTags.length) ? filterTags : articles;
    let heading =(filterTags.length) ? filterTags.tagList : "";

    return (
      <div>
        {/* <header>
          <nav className="nav">
            <div className="nav-logo">
              <h1>conduit</h1>
            </div>
            <div className="nav-links">
              <ul>
                <li>Home</li>
                <li>Sign in</li>
                <li>Sign up</li>
              </ul>
        
            </div>
          </nav>  
        </header> */}

        {/* Hero section */}
        <section>
          <div className="hero">
            <h2>conduit</h2>
            <p>A place to share your knowledge.</p>
          </div>
        </section>
        {/* Global Feed section */}
        <section>
          <div className="super">
            <article className="article-wrapper">
              {/* conditional rendering for tag required */}
              <h2>{"Global Feed" || heading}</h2>
              <hr/>

              {
                a.map(article => (

              <div className="post">

                <div className="post-header">
                  <div className="post-details">
                    <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="user-img" />
                    <div className="user-info">
                      <h4>{article.author.username}</h4>
                      <p>{article.createdAt}</p>
                    </div>
                  </div>
                  {/* Heart */}
                  <div className="likes">
                    <p className="heart">&#9829;</p>
                    <p>{article.favoritesCount}</p>
                  </div>
                </div>
                
                {/* Post content */}
                <div className="post-content">
                  <p>{article.title}</p>
                  <p>{article.description}</p>
                  <button type="submit">Read More</button>

                </div>
              </div>

                ))
              }
            </article>
          {/* Tag */}
            <Tags />
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.reducer,
    filterTags: state.filterTags
  }
}

export default connect(mapStateToProps)(Home);