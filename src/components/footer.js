import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Facebook, Twitter, Youtube, Linkedin } from 'react-feather'

import AimHigher from '../img/aimhigher.svg'

import '../scss/partials/footer.scss'

const Footer = () => {
	const menu = [
			{
				url: 'https://facebook.com',
				title: 'Facebook',
				type: 'facebook',
			},
		],
		SocialIcons = {
			facebook: <Facebook />,
			twitter: <Twitter />,
			youtube: <Youtube />,
			linkedin: <Linkedin />,
		}
	return (
		<footer>
			<nav className="icons">
				<ul>
					{menu.map(item => (
						<li key={item.type}>
							<a href={item.url} target="_blank">
								<span>{item.title}</span>
								{SocialIcons[item.type]}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<a className="aimhigher" href="https://aimhigherweb.design" target="_blank" rel="nofollow">
				<AimHigher />
			</a>
		</footer>
	)
}

export default Footer
