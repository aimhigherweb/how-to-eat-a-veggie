import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Instagram, Linkedin } from 'react-feather'

import AimHigher from '../img/aimhigher.svg'

import '../scss/partials/footer.scss'

const Footer = () => {
	const menu = [
			{
				url: 'https://www.instagram.com/howtoeataveggie/',
				title: 'Instagram',
				type: 'instagram',
			},
			{
				url: 'https://www.linkedin.com/in/caitlin-kapernick-18abaa18a',
				title: 'LinkedIn',
				type: 'linkedin'
			}
		],
		SocialIcons = {
			instagram: <Instagram />,
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
