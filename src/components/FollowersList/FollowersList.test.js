import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from './FollowersList'

const MockFollowerList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
)

describe('FollowersList', () => {
  it('renders 5 card', async () => {
    render(<MockFollowerList />)

    const firstCard = await waitFor(
      () => screen.findAllByTestId(/follower-item/i),
      { timeout: 5000 }
    )
    expect(firstCard).toHaveLength(5)
  })

  it('renders first card', async () => {
    render(<MockFollowerList />)

    const firstCard = await waitFor(
      () => screen.findByTestId(/follower-item-0/i),
      { timeout: 5000 }
    )
    expect(firstCard).toBeVisible()
  })
})
