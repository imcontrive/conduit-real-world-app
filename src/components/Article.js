// Each Article view
import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Article extends React.Component {
	render() {
		return(
			<>
				<section className="article-comp-container">
					<div className="article-section">
						<h2>article title</h2>
						<div className="article-author">
							<img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="user" />
							<div className="author-info">
								<h4>username</h4>
								<p>createdAt</p>
							</div>
							<div className="article-follow-btn">
								<button className="btn-article">+ Follow @Username</button>
								<button className="btn-article">&#9829; Favorite Article (0)</button>
							</div>
						</div>
					</div>
				</section>

				{/* Article Mid Section */}
				<section className="article-section mid-section">
					<p>Article Main</p>
					<hr></hr>

					<div className="article-author mid">
						<img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="user" />
						<div className="author-info">
							<h4>username</h4>
							<p>createdAt</p>
						</div>
						<div className="article-follow-btn">
							<button className="btn-article">+ Follow @Username</button>
							<button className="btn-article">&#9829; Favorite Article (0)</button>
						</div>
					</div>
					<div className="navlink-article">
						<NavLink exact className="navigation-link nav-logo" to='/login' >
							<p>Sign in</p>
						</NavLink>
						or
						<NavLink exact className="navigation-link nav-logo" to='/register' >
							<p>sign up</p>
						</NavLink>
						<p className="add-comments">to add comments to this article.</p>
					</div>
				</section>
			</>
		)
	}
}