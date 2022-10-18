import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Todo from './Todo'

const TodoMock = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
)

const addTasks = (...arrayOfTasks) => {
  const inputEl = screen.getByPlaceholderText(/Add a new task here.../i)
  const btnEl = screen.getByRole('button', { name: /Add/i })
  arrayOfTasks.forEach((task) => {
    fireEvent.change(inputEl, { target: { value: task } })
    fireEvent.click(btnEl)
  })
}

describe('Todo', () => {
  beforeEach(() => {
    render(<TodoMock />)
  })

  it('should add todo', () => {
    addTasks('test value')
    expect(screen.getByText(/test value/i)).toBeVisible()
  })

  it('should add 3 todo', () => {
    addTasks('cat', 'dog', 'food')
    const todosElements = screen.getAllByTestId('task-container')
    expect(todosElements).toHaveLength(3)
  })

  describe('interaction with task items', () => {
    const taskName = 'test value'

    beforeEach(() => {
      addTasks(taskName)
    })

    it('should add todo that has not got css class', () => {
      const addedTaskElement = screen.getByText(taskName)
      expect(addedTaskElement).not.toHaveClass('todo-item-active')
    })

    it('added todo should have css classes', () => {
      const addedTaskElement = screen.getByText(taskName)
      fireEvent.click(addedTaskElement)
      expect(addedTaskElement).toHaveClass('todo-item-active', 'todo-item')
    })
  })
})
