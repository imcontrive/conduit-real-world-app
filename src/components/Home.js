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
      </div>
    )
  }
}
