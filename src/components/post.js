import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const InstaPost = ({ image, caption, classes, links }) => {
	const excerptLength = 400
	caption = caption
		.replace(/#(\w*)/g, '<a href="https://instagram.com/explore/tags/$1" target="_blank">#$1</a>')
		.replace(/@(\w*)/g, '<a href="https://instagram.com/$1" target="_blank">@$1</a>')
	let excerpt = caption.substring(0, excerptLength)

	if (excerpt.includes('<a') && excerpt.match(/<a/g).length === excerpt.match(/<\/a>/g).length) {
		excerpt = `${caption.substring(0, excerptLength)}<input id="${caption.substring(
			0,
			10
		)}" type="checkbox" /><label class="readmore" for="${caption.substring(0, 10)}">... Read More</label><span>${caption.substring(
			excerptLength,
			caption.length
		)}</span>`
	} else if (excerpt.includes('<a')) {
		const index = caption.substring(excerptLength, caption.length).match(/<\/a>/).index + excerptLength + 4

		excerpt = `${excerpt}${caption.substring(excerptLength, index)}<input id="${caption.substring(
			0,
			10
		)}" type="checkbox" /><label class="readmore" for="${caption.substring(0, 10)}">... Read More</label><span>${caption.substring(
			index,
			caption.length
		)}</span>`
	} else {
		excerpt = `${caption.substring(0, excerptLength)}<input id="${caption.substring(
			0,
			10
		)}" type="checkbox" /><label class="readmore" for="${caption.substring(0, 10)}">... Read More</label><span>${caption.substring(
			excerptLength,
			caption.length
		)}</span>`
	}

	return (
		<figure data-length={caption.length} className={classes}>
			<Img fluid={image} />
			{links && (
				<div class="icons">
					<ul>
						{links.map(link => (
							<li>
								{link.type == 'external' ? (
									<a href={link.url} target="_blank">
										{link.title}
									</a>
								) : (
									<Link to={link.url}>{link.title}</Link>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
			<figcaption dangerouslySetInnerHTML={{ __html: excerpt }} />
		</figure>
	)
}

export default InstaPost
