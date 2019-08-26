import React from 'react'
import { Link } from 'gatsby'

import Logo from '../img/logo.svg'

import '../scss/partials/header.scss'

const Header = () => {
	const menu = [
		{
			slug: '/about',
			title: 'About',
		},
		{
			slug: '/recipes',
			title: 'Recipes',
		},
	]
	return (
		<header>
			<Link to="/" className="site-logo">
				<Logo />
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
