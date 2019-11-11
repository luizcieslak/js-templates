import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
	<Layout>
		<SEO title='Page two' />
		<h1 class='tracking-widest'>Hi from the second page</h1>
		<p class='italic'>Welcome to page 2</p>
		<Link to='/'>
			<button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
				Go back to the homepage
			</button>
		</Link>
	</Layout>
)

export default SecondPage
