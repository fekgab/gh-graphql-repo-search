import { render, screen } from '@testing-library/react'
import { Results } from './Results'
import { SearchContext } from '../../context/SearchContext'
import { MockedProvider } from '@apollo/client/testing'

describe('<Results />', () => {
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
    render(<Results />, { wrapper })
    component = screen.getByTestId('results')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
