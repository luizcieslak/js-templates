import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Header from './header'
import { SiteQuery } from '../generated/graphql'

const pageQuery = graphql`
	query Site {
		site {
			siteMetadata {
				title
			}
		}
	}
`

const Layout: React.FunctionComponent = ({ children }) => {
	const data: SiteQuery = useStaticQuery(pageQuery)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div className='container p-5'>
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
