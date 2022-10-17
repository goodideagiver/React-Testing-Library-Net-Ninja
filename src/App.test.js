import { render } from '@testing-library/react'
import App from './App'

test('Renders todo title', () => {
	render(<App />)
	const title = screen.getByText(/todo/i)
	expect(title).toBeInTheDocument()
})
