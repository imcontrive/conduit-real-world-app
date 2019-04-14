import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav() {
	return (
		<ul className="nav">
			<li>
				<NavLink exact activeClassName = 'active  ' className="navigation-link" to='/' >
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName = 'active ' className="navigation-link" to='/register' >
					Signup
				</NavLink>
				<NavLink exact activeClassName = 'active ' className="navigation-link" to='/login' >
					Signin
				</NavLink>
			</li>
		</ul>
	)
}