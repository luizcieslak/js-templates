import React from 'react'

import { Router } from '@reach/router'
import Example from './Example'
import NotFound from './NotFound'

const App = () => {
	return (
		<Router>
			<Example path='/' />
			<NotFound default />
		</Router>
	)
}

export default App
