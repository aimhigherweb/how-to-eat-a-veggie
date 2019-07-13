import React from 'react'
import { Link } from 'gatsby'

import '../scss/partials/header.scss'

const Header = () => {
	const menu = [
		{
			slug: '/about',
			title: 'About',
		},
	]
	return (
		<header>
			<Link to="/" className="site-logo">
				How to Eat a Veggie
			</Link>

			<nav>
				<ul id="menu-main" className="menu">
					{menu.map(item => (
						<li key={item.slug}>
							<Link activeClassName="active" to={item.slug}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
