// Each Article view
import React from 'react';

export default class Article extends React.Component {
	render() {
		return(
			<>
				<section>
					<h2>article title</h2>
					<div>
						<div className="post-details">
							<img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="user-img" />
							<div className="user-info">
								<h4>username</h4>
								<p>createdAt</p>
							</div>
						</div>

					</div>
				</section>
			</>


		)
	}
}