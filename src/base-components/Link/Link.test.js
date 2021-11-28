import { render, screen } from '@testing-library/react'
import { Link } from '../index'

describe('<List />', () => {
  let component

  beforeEach(() => {
    render(<Link />)
    component = screen.getByTestId('link')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
