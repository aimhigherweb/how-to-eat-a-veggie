import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import Header from './header'
import Footer from './footer'

import Logo from '../img/favicon.png'
import Favicon from '../img/favicon.png'

import '../scss/global.scss'
import '../scss/content.scss'

const Layout = ({ children, meta }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
			}
		`}
		render={data => {
			let site = data.site.siteMetadata
			meta.title = site.title
			meta.siteUrl = site.siteUrl
			meta.description = meta.description ? meta.description : site.description

			return (
				<Fragment>
					<Meta {...meta} />
					{<Header />}
					<main id="main">{children}</main>
					{<Footer />}
				</Fragment>
			)
		}}
	/>
)

// eslint-disable-next-line one-var
const Meta = ({ name, title, description, slug, siteUrl, image }) => {
	slug = !slug && '/'
	image = !image && Logo
	title = name ? `${name} | ${title}` : title

	return (
		<Helmet>
			<title>{name}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={siteUrl + slug} />

			<meta name="twitter:card" content="summary_large_image" />
			<link rel="shortcut icon" href={Favicon} />
			<link rel="icon" sizes="192x192" href={Favicon} />
			<link rel="apple-touch-icon" href={Favicon} />
			<meta name="theme-color" content="#003462" />
			<link rel="mask-icon" href={Favicon} color="#003462" />
			<base href="/" />

			{/* Facebook */}
			<meta property="og:url" content={siteUrl + slug} />

			<meta property="og:title" content={name} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />

			{/* Twitter */}
			<meta name="twitter:url" content={siteUrl + slug} />
			<meta name="twitter:title" content={name} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	)
}

export default Layout
