import { render, screen } from '@testing-library/react'
import { Issues } from './Issues'
import { SearchContext } from '../../context/SearchContext'
import { MockedProvider } from '@apollo/client/testing'

describe('<Issues />', () => {
  let component
  const wrapper = ({ children }) => {
    return (
      <SearchContext.Provider value={{ query: 'foo' }}>
        <MockedProvider mocks={[]} addTypename={false}>
          {children}
        </MockedProvider>
      </SearchContext.Provider>
    )
  }

  beforeEach(() => {
    render(<Issues />, { wrapper })
    component = screen.getByTestId('issues')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
