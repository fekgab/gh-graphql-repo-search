import { render, screen } from '@testing-library/react'
import { Badge } from '../index'

describe('<Button />', () => {
  let component

  beforeEach(() => {
    render(<Badge />)
    component = screen.getByTestId('badge')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
