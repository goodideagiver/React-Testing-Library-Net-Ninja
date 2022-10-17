import { render, screen } from '@testing-library/react'
import Header from './Header'

test('Rebnders passed title', () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = screen.getByText(titleToPass)
	expect(headingElement).toBeInTheDocument()
})
