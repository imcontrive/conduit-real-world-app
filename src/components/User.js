import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component {
	render() {
		const {profiles} = this.props;
		// console.log(profiles, 'this');
		
		return (
			<>
				<section className="user-section">
					<div className="user-hero">
						<img src={profiles.image} alt="user" />
						<p>{profiles.username}</p>
						<p>{profiles.bio}</p>
						<div className="follow-btn">
							<button>+ Follow {profiles.username}</button>
						</div>
					</div>

				</section>

				{/* User Articles section */}
				<div className="super super-addn">
					<article className="article-wrapper article-addn">
						<h2>My Articles</h2>
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

function mapStateToProps(state) {
	console.log(state);
	return {
		profiles: state.userProfile,
	}
}

export default connect(mapStateToProps)(User)