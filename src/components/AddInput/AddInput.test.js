import { fireEvent, render, screen } from '@testing-library/react'
import AddInput from './AddInput'

const mockedSetTodos = jest.fn()

describe('AddInput', () => {
  it('Should render input', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
    expect(inputElement).toBeVisible()
    expect(inputElement.value).toBe('')
  })

  it('Should change value on input', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
    fireEvent.change(inputElement, { target: { value: 'Go grocery Shopping' } })
    expect(inputElement.value).toBe('Go grocery Shopping')
  })

  it('should have empty value if btn is clicked', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
    fireEvent.change(inputElement, { target: { value: 'Go grocery Shopping' } })
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('')
  })
})
