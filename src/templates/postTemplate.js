import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default class PostTemplate extends React.Component {
	render() {
		const { data } = this.props,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			}
		// 	images = data.allInstagramContent.edges.map(post => {
		// 		let postData = {
		// 			image: post.node.localImage.childImageSharp.fluid,
		// 			caption: post.node.caption.text,
		// 		}

		// 		postData.caption = postData.caption
		// 			.replace(/#(\w*)/g, '<a href="https://instagram.com/explore/tags/$1" target="_blank">#$1</a>')
		// 			.replace(/@(\w*)/g, '<a href="https://instagram.com/$1" target="_blank">@$1</a>')

		// 		return <InstaPost {...postData} key={postData.caption} />
		// 	})

		return (
			<Layout meta={meta}>
				<h1>Post Template</h1>
				{/* <blockquote>{meta.description}</blockquote>
				<div className="insta-feed">{images}</div> */}
			</Layout>
		)
	}
}

// const InstaPost = ({ image, caption }) => {
// 	let classes = 'post'

// 	if (caption.length > 3500) {
// 		classes += ' c-2 r-2'
// 	} else if (caption.length > 3000) {
// 		classes += ' r-3'
// 	} else if (caption.length > 2000) {
// 		classes += ' r-2'
// 	}

// 	return (
// 		<figure data-length={caption.length} className={classes}>
// 			<Img fluid={image} />
// 			<figcaption dangerouslySetInnerHTML={{ __html: caption }} />
// 		</figure>
// 	)
// }

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
