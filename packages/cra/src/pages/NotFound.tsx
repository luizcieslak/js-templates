import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Layout from '../commons/Layout'

export default function NotFound(props: RouteComponentProps) {
	return (
		<Layout>
			<h1>404 :(</h1>
		</Layout>
	)
}
