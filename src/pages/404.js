import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


export default class PageNotFound extends React.Component {
	render() {
		const { data } = this.props,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			}

		return (
			<Layout meta={meta}>
				<h1>404 Not found</h1>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
	}
`
