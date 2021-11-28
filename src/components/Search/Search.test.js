import { Search } from './Search'
import { SearchProvider } from '../../context/SearchContext'
import { fireEvent, render } from '@testing-library/react'

describe('<Search/>', () => {
  const wrapper = ({ children }) => {
    return <SearchProvider>{children}</SearchProvider>
  }

  let search, searchInput, searchForm

  beforeEach(() => {
    search = render(<Search />, { wrapper })
    searchInput = search.getByTestId('searchInput')
    searchForm = search.getByTestId('search')
  })

  const whenSearchInputChange = (value) => {
    fireEvent.change(searchInput, { target: { value } })
  }

  const whenSearchFormSubmit = (value) => {
    fireEvent.submit(searchForm, { target: [{ value }] })
  }

  const thenQueryValueChangeTo = (expectedQuery) => {
    expect(searchInput.value).toBe(expectedQuery)
  }

  const thenQueryDefaultValueChangeTo = (expectedQuery) => {
    expect(searchInput.defaultValue).toBe(expectedQuery)
  }

  it('should have an initial empty defaultValue', () => {
    thenQueryDefaultValueChangeTo('')
  })

  it('should not change initial empty defaultValue until submit', () => {
    thenQueryDefaultValueChangeTo('')
    whenSearchInputChange('foo')
    thenQueryDefaultValueChangeTo('')
  })

  it('should update value before submit', () => {
    thenQueryDefaultValueChangeTo('')
    whenSearchInputChange('foo')
    thenQueryValueChangeTo('foo')
  })

  it('should update defaultValue after submit', () => {
    thenQueryDefaultValueChangeTo('')
    whenSearchFormSubmit('foo')
    thenQueryDefaultValueChangeTo('foo')
  })
})
