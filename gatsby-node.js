const path = require('path'),
	createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	return graphql(`
		{
			allInstagramContent {
				edges {
					node {
						id
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()))
			return Promise.reject(result.errors)
		}

		createPaginatedPages({
			edges: result.data.allInstagramContent.edges,
			createPage: createPage,
			pageTemplate: 'src/templates/posts.js',
			pageLength: 5, // This is optional and defaults to 10 if not used
			pathPrefix: 'posts',
			buildPath: (index, pathPrefix) => (index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`),
		})

		const data = result.data.allInstagramContent.edges

		data.forEach(edge => {
			const id = edge.node.id,
				template = path.resolve('src/templates/postTemplate.js')

			createPage({
				path: `/posts/${id}`,
				component: template,
				context: {
					id,
				},
			})
		})
	})
}
