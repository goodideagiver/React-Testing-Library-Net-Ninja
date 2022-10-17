import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from './TodoFooter'

const MockTodoFooter = ({ numOfIncopmpleteTasks }) => (
	<BrowserRouter>
		<TodoFooter numberOfIncompleteTasks={numOfIncopmpleteTasks} />
	</BrowserRouter>
)

it('Should render correct amount of incomplete tasks', () => {
	render(<MockTodoFooter numOfIncopmpleteTasks={4} />)
	const paragraphEl = screen.getByText(/4 tasks left/i)
	expect(paragraphEl).toBeInTheDocument()
})

it('Should render correct amount of incomplete 1', () => {
	render(<MockTodoFooter numOfIncopmpleteTasks={1} />)
	const paragraphEl = screen.getByText(/1 task left/i)
	expect(paragraphEl).toBeInTheDocument()
})
