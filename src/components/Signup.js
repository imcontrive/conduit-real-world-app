import React from 'react';


export default class Signup extends React.Component {

	render() {
		return (
			<>
				<section className="signup-container">
					<h2>Sign up</h2>
					<p>Have an account?</p>
					<form className="form-container-signup" >
						<input className="username form-control" name="username" type="text" placeholder="Username"></input>
						<input className="email form-control" name="email" type="email" placeholder="email"></input>
						<input className="password form-control" name="password" type="password" placeholder="Password"></input>
						<input className="submit-btn" type="button" value="Sign up" ></input>
					</form>
				</section>
			</>


		)
	}
}