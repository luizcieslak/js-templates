import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useState, useCallback } from 'react'
import GatsbyImage from 'gatsby-image'
import { GatsbyIconQuery } from '../generated/graphql'

const iconQuery = graphql`
	query GatsbyIcon {
		file(relativePath: { eq: "gatsby-icon.png" }) {
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

interface IProps {
	siteTitle: string
}

const Header: React.FunctionComponent<IProps> = props => {
	const data: GatsbyIconQuery = useStaticQuery(iconQuery)
	console.log('data icon header', data)

	const [menuStatus, setMenuStatus] = useState('CLOSED')
	const toggleMenu = useCallback(() => {
		menuStatus === 'CLOSED' ? setMenuStatus('OPEN') : setMenuStatus('CLOSED')
	}, [menuStatus])

	return (
		<div className={`relative bg-primary ${menuStatus === 'OPEN' ? 'pb-8' : isIndex ? 'header pb-16' : 'pb-0'}`}>
			<nav class='flex items-center justify-between flex-wrap bg-blue-500 p-6'>
				<div class='flex items-center flex-shrink-0 text-white mr-6'>
					<div class='h-8 w-8 mr-4'>
						<GatsbyImage fluid={data.file.childImageSharp.fluid} />
					</div>
					<span class='font-semibold text-xl tracking-tight'>{props.siteTitle}</span>
				</div>
				<div class='block lg:hidden'>
					<button class='flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white'>
						<svg class='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div class={`w-full 
					${menuStatus === 'OPEN' ? 'block' : 'hidden'} 
					block flex-grow lg:flex lg:items-center lg:w-auto`}
				>
					<div class='text-sm lg:flex-grow'>
						<Link to='/' className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4'>
							Home
						</Link>
						<Link to='/page-2' className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4'>
							Page 2
						</Link>
					</div>
					<div>
						<a
							href='#'
							class='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0'
						>
							Download
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
