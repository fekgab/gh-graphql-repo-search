import { render, screen } from '@testing-library/react'
import { Button } from '../index'

describe('<Button />', () => {
  let component

  beforeEach(() => {
    render(<Button />)
    component = screen.getByTestId('button')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
