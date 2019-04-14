import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav() {
	return (
		 <header>
			<nav className="nav">
				
				<NavLink exact className="navigation-link nav-logo" to='/' >
					<h5>conduit</h5>
				</NavLink>
					
		
				<div className="nav-links">
				<ul>
					<li>
						<NavLink exact activeClassName = 'active' className="navigation-link" to='/' >
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName = 'active' className="navigation-link" to='/register' >
							Signup
						</NavLink>
						<NavLink exact activeClassName = 'active' className="navigation-link" to='/login' >
							Signin
						</NavLink>
					</li>
				</ul>
		
				</div>
			</nav>  
		</header> 
				
		
	)
}