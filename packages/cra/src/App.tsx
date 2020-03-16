import React from 'react'

import { Router } from '@reach/router'
import Example from './pages/Example'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<Router>
			<Example path='/' />
			<NotFound default />
		</Router>
	)
}

export default App
