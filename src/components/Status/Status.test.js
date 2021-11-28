import { render, screen } from '@testing-library/react'
import { Status } from './Status'
import { SearchContext } from '../../context/SearchContext'
import { MockedProvider } from '@apollo/client/testing'

describe('<Status />', () => {
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
    render(<Status />, { wrapper })
    component = screen.getByTestId('status')
  })

  const thenComponentIsLoaded = () => {
    expect(component).toBeInTheDocument()
  }

  it('should be loaded', function () {
    thenComponentIsLoaded()
  })
})
