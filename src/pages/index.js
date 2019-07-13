import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

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
					image: post.node.localImage.childImageSharp.fixed,
					caption: post.node.caption.text,
				}

				postData.caption = postData.caption
					.replace(/#(\w*)/g, '<a href="https://instagram.com/explore/tags/$1" target="_blank">#$1</a>')
					.replace(/@(\w*)/g, '<a href="https://instagram.com/$1" target="_blank">@$1</a>')

				return <InstaPost {...postData} key={postData.caption} />
			})

		return (
			<Layout meta={meta}>
				<h1>How to Eat a Veggie</h1>
				{images}
			</Layout>
		)
	}
}

const InstaPost = ({ image, caption }) => {
	return (
		<div>
			<Img fixed={image} />
			<p dangerouslySetInnerHTML={{ __html: caption }} />
		</div>
	)
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
					localImage {
						childImageSharp {
							fixed {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
				}
			}
		}
	}
`
