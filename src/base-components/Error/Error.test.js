import { render, screen } from '@testing-library/react'
import { Error } from '../index'

describe('<Error />', () => {
  let component

  beforeEach(() => {
    render(<Error />)
    component = screen.getByTestId('error')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
