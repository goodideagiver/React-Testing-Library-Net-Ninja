import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from './TodoFooter'

const MockTodoFooter = ({ numOfIncopmpleteTasks }) => (
	<BrowserRouter>
		<TodoFooter numberOfIncompleteTasks={numOfIncopmpleteTasks} />
	</BrowserRouter>
)

describe('Footr info component', () => {
	it('Should render correct amount of incomplete tasks', () => {
		render(<MockTodoFooter numOfIncopmpleteTasks={4} />)
		const paragraphEl = screen.getByText(/4 tasks left/i)
		expect(paragraphEl).toBeInTheDocument()
	})

	it('Should render correct amount of incomplete 1', () => {
		render(<MockTodoFooter numOfIncopmpleteTasks={1} />)
		const paragraphEl = screen.getByText(/1 task left/i)
		expect(paragraphEl).toBeVisible()
	})
})

// it('Should render correct amount of incomplete 1 and contain', () => {
// 	render(<MockTodoFooter numOfIncopmpleteTasks={1} />)
// 	const paragraphEl = screen.getByText(/1 task left/i)
// 	expect(paragraphEl).toContainHTML('p')
// })

// it('Should render correct amount of incomplete 1 to be', () => {
// 	render(<MockTodoFooter numOfIncopmpleteTasks={1} />)
// 	const paragraphEl = screen.getByText(/1 task left/i)
// 	expect(paragraphEl.textContent).toBe('1 task left')
// })
