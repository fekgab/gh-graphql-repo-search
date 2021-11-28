import { render, screen } from '@testing-library/react'
import { List } from '../index'

describe('<List />', () => {
  let component

  beforeEach(() => {
    render(<List />)
    component = screen.getByTestId('list')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
