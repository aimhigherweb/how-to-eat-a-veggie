require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'How to Eat a Veggie',
		description: 'The dad bod of insta food - not always attractive but at least it’s achievable',
		siteUrl: 'https://howtoeataveggie.com.au',
	},
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				include: `./src/img`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `./src/img`,
				name: 'images',
			},
		},
		{
			resolve: `gatsby-source-instagram-all`,
			options: {
			  access_token: process.env.GATSBY_INSTAGRAM_API
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify-cache`,
	],
}
