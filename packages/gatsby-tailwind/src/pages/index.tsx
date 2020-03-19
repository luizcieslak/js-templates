import { Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GatsbyImage from 'gatsby-image'
import { GatsbyAstronautQuery } from '../generated/graphql'
import { FaBeer } from 'react-icons/fa'

interface IProps {
	data: GatsbyAstronautQuery
}

const IndexPage: React.FC<IProps> = ({ data }) => {
	console.log('oba', data.file.childImageSharp.fluid)
	return (
		<Layout>
			<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
			<div className='w-1/3'>
				{/* TODO: add optional chaining in file */}
				<GatsbyImage fluid={data.file.childImageSharp.fluid} />
			</div>
			<FaBeer />
			<Link to='/page-2'>
				<button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5'>
					go to page 2
				</button>
			</Link>
		</Layout>
	)
}

export const pageQuery = graphql`
	query GatsbyAstronaut {
		file(relativePath: { eq: "gatsby-astronaut.png" }) {
			childImageSharp {
				fluid {
					base64
					tracedSVG
					aspectRatio
					src
					srcSet
					srcWebp
					srcSetWebp
					sizes
					originalImg
					originalName
					presentationWidth
					presentationHeight
				}
			}
		}
	}
`

export default IndexPage
