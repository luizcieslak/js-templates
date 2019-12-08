module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
    },
    `gatsby-plugin-preact`,
		{
			resolve: 'gatsby-plugin-netlify',
			options: {
				headers: {
					// Headers de segurança abaixo, vale a validação dps
					// '/*': [
					// 	'X-Frame-Options: sameorigin',
					// 	'X-XSS-Protection: 0',
					// 	'X-Content-Type-Options: nosniff',
					// 	`Expect-CT: max-age=86400, enforce, report-uri='https://url.para/report'`,
					// 	'Access-Control-Allow-Origin: *',
					// 	`Feature-Policy: geolocation 'none'`,
					// ],
				}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				// transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
			}
		},
		{
			resolve: 'gatsby-theme-mdx-deck',
			options: {
				// enable or disable gatsby-plugin-mdx
				mdx: false,
				// source directory
				contentPath: 'decks',
				// base path for routes generate by this theme
				basePath: ''
			}
		}// To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
		`gatsby-plugin-offline`
	]
}
