import React from 'react';


export default class Signin extends React.Component {

	render() {
		return (
			<>
				<section className="signup-container">
					<h2>Sign in</h2>
					<p>Need an account?</p>
					<form className="form-container-signin" >
						<input className="username form-control" name="username" type="text" placeholder="Username"></input>
						<input className="password form-control" name="password" type="password" placeholder="Password"></input>
						<input className="submit-btn" type="button" value="sign in" ></input>
					</form>
				</section>
			</>


		)
	}
}