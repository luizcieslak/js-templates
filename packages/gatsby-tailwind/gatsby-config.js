module.exports = {
	siteMetadata: {
		title: `gatsby-tailwind`,
		description: `gatsby-tailwind starter, using TS, Jest, ESLint and others.`,
		author: `@luizcieslak`
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		// uncomment this to see the webpack bundle analyzer
		// `gatsby-plugin-webpack-bundle-analyzer`,
		// see: https://henrique.codes/speed-up-gatsby-site/
		`gatsby-plugin-preact`,
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				purgeOnly: ['src/style.css'] // Purge only these files/folders
			}
		},
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
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
}
