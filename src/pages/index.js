import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import InstaPost from '../components/post'

import '../scss/layouts/home.scss'

export default class IndexPage extends React.Component {
	render() {
		const { data } = this.props,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			},
			images = data.allInstagramContent.edges.map(post => {
				let postData = {
						image: post.node.localImage.childImageSharp.fluid,
						caption: post.node.caption.text,
					},
					caption = postData.caption,
					classes = 'post',
					postId = post.node.link.replace('https://www.instagram.com/p/', '').replace('/', '')

				if (caption.length > 3500) {
					classes += ' c-2 r-2'
				} else if (caption.length > 3000) {
					classes += ' r-3'
				} else if (caption.length > 2000) {
					classes += ' r-2'
				}

				postData.classes = classes

				postData.links = [
					{
						title: 'Instagram',
						url: post.node.link,
						type: 'external',
					},
					{
						title: 'Facebook',
						url: `https://www.facebook.com/sharer/sharer.php?u=${meta.slug}/posts/${postId}`,
						type: 'external',
					},
					{
						title: 'Post',
						url: `/posts/${postId}`,
					},
					{
						title: 'Recipes',
						url: `/recipes/tags/${postId}`,
					},
				]

				return <InstaPost {...postData} key={caption} />
			})

		return (
			<Layout meta={meta}>
				<blockquote>{meta.description}</blockquote>
				<div className="insta-feed">{images}</div>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		allInstagramContent(limit: 20) {
			edges {
				node {
					caption {
						text
					}
					link
					localImage {
						childImageSharp {
							fluid(maxWidth: 400) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
`
