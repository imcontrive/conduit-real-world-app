import React from 'react';

export default class User extends React.Component {
	render() {
		return (
			<>
				<section className="user-section">
					<div className="user-hero">
						<img src="" alt="user" />
						<p>Username</p>
						<div className="follow-btn">
							<button>+ Follow @Username</button>
						</div>
					</div>

				</section>

				{/* User Articles section */}
				<div className="super super-addn">
					<article className="article-wrapper article-addn">
						<h2>Global Feed</h2>
						<hr/>

						<div className="post">
							<div className="post-header">
								<div className="post-details">
									<img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="user" />
									<div className="user-info">
										<h4>author username</h4>
										<p>createdAt</p>
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
								<p>title</p>
								<p>description</p>
								<button type="submit">Read More</button>

							</div>
						</div>
					</article>
				</div>
			</>

		)
	}
}