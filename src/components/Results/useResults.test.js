import { renderHook } from '@testing-library/react-hooks'
import { useResults } from './useResults'
import { SearchProvider } from '../../context/SearchContext'
import { MockedProvider } from '@apollo/client/testing'

const wrapper = ({ children }) => {
  const mocks = []

  return (
    <SearchProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    </SearchProvider>
  )
}

it('should use page', () => {
  const query = 'foo'
  const { result } = renderHook(() => useResults(query), { wrapper })

  /*    loading,
    data: edges,
    fetchMoreData,
    hasNextPage,
    hasPreviousPage,*/

  expect(result.current.loading).toBe(true)
  expect(result.current.data).toStrictEqual([])
  expect(result.current.fetchMoreData).toBeDefined()
  expect(result.current.hasPreviousPage).toBeUndefined()
})
