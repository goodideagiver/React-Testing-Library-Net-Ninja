import { render, screen } from '@testing-library/react'
import Header from './Header'

it('should render same text passed into title prop', () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = screen.getByText(titleToPass)
	expect(headingElement).toBeInTheDocument()
})

it('should render heading', () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = screen.getByRole('heading', {
		name: 'Test title',
		exact: false,
	})
	expect(headingElement).toBeInTheDocument()
})

it('should render heading with title header', () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = screen.getByTitle('testing header')
	expect(headingElement).toBeInTheDocument()
})

//by test id
it('should render heading with test id', () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = screen.getByTestId('header-2')
	expect(headingElement).toBeInTheDocument()
})

it('should render heading with findByText', async () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = await screen.findByText(titleToPass)
	expect(headingElement).toBeInTheDocument()
})

//query by and opposite condition test
it('should fail', () => {
	const titleToPass = 'Test title'
	render(<Header title={titleToPass} />)
	const headingElement = screen.queryByText('Dogs')
	expect(headingElement).not.toBeInTheDocument()
})

it('should render 2 headings', () => {
	render(<Header title='title' />)
	const headings = screen.getAllByRole('heading')
	expect(headings).toHaveLength(2)
})
