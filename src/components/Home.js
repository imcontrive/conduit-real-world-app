import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
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
        </header>

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
              <h2>Global Feed</h2>
              <div className="post">

                <div className="post-header">
                  <div className="post-details">
                    <img src="https://static.productionready.io/images/smiley-cyrus.jpg" />
                    <div className="user-info">
                      <h4>@UserName</h4>
                      <p>post date</p>
                    </div>
                  </div>
                  {/* Heart */}
                  <div className="likes">
                    <p className="heart">&#9829;</p>
                    <p>0</p>
                  </div>
                </div>
                
                {/* Post content */}
                <div className="post-content">
                  <p>Article Name</p>
                  <p>Article description</p>
                  <button>Read More</button>

                </div>
              </div>
            </article>


          {/* Tag */}

          <section>
            <div className="tag">
              <h4>Popular Tags</h4>
              
            </div>
          </section>
          </div>


        </section>
      </div>
    )
  }
}
