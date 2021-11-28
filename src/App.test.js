import { render } from '@testing-library/react'
import App from './App'
import { SearchContext } from './context/SearchContext'
import { MockedProvider } from '@apollo/client/testing'

describe('<App/>', () => {
  let app, search, results, container
  const wrapperWithoutQuery = ({ children }) => (
    <MockedProvider mocks={[]} addTypename={false}>
      <SearchContext.Provider value={{ query: null }}>
        {children}
      </SearchContext.Provider>
    </MockedProvider>
  )
  const wrapperWithQuery = ({ children }) => (
    <MockedProvider mocks={[]} addTypename={false}>
      <SearchContext.Provider value={{ query: 'foo' }}>
        {children}
      </SearchContext.Provider>
    </MockedProvider>
  )

  const givenAppRenderedWith = (wrapper) => {
    app = render(<App />, { wrapper })
  }

  const givenContainer = () => {
    container = app.getByTestId('app')
  }

  const givenSearch = () => {
    search = app.getByTestId('search')
  }

  const givenResults = () => {
    results = app.getByTestId('results')
  }

  const thenComponentIsLoaded = (component) => {
    expect(component).toBeInTheDocument()
  }

  const thenComponentNotIsLoaded = (component) => {
    expect(component).toBeUndefined()
  }

  describe('with no query', () => {
    it('should be loaded without results if query is empty', function () {
      givenAppRenderedWith(wrapperWithoutQuery)
      givenContainer()
      givenSearch()
      thenComponentIsLoaded(container)
      thenComponentIsLoaded(search)
      thenComponentNotIsLoaded(results)
    })
  })

  it('should be loaded with results if query is defined', function () {
    givenAppRenderedWith(wrapperWithQuery)
    givenContainer()
    givenSearch()
    givenResults()
    thenComponentIsLoaded(container)
    thenComponentIsLoaded(search)
    thenComponentIsLoaded(results)
  })
})
