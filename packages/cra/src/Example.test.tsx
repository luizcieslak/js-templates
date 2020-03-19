import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { createHistory, createMemorySource, LocationProvider } from '@reach/router'
import Example from './Example'

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(ui, { route = '/', history = createHistory(createMemorySource(route)) } = {}) {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history
	}
}

test('should find string example in page', () => {
	const { getByText } = render(<Example />)
	const exampleP = getByText(/example/i)
	expect(exampleP.textContent).toBe('example')
})
