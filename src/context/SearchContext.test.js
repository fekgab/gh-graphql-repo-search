import { act, renderHook } from '@testing-library/react-hooks'
import { SearchProvider, useSearchContext } from './SearchContext'

describe('<SearchProvider />', () => {
  const emptyWrapper = ({ children }) => <>{children}</>
  const wrapper = ({ children }) => {
    return <SearchProvider>{children}</SearchProvider>
  }
  let result

  const givenSearchContext = (isDefined = true) => {
    result = renderHook(() => useSearchContext(), {
      wrapper: isDefined ? wrapper : emptyWrapper,
    }).result
  }

  const thenInitializedQueryShouldBe = (expectedQuery) => {
    expect(result.current.query).toBe(expectedQuery)
  }

  const whenQueryIsSet = (query) => {
    act(() => {
      result.current.setQuery(query)
    })
  }

  describe('defined', () => {
    it('should use empty query', () => {
      givenSearchContext()
      thenInitializedQueryShouldBe('')
    })

    it('should use custom query when incrementing', () => {
      givenSearchContext()
      thenInitializedQueryShouldBe('')
      whenQueryIsSet('foo')
      thenInitializedQueryShouldBe('foo')
    })
  })

  describe('not defined', () => {
    const thenSearchQueryShouldThrowException = (error) => {
      expect(() => {
        expect(result.current).not.toBe(undefined)
      }).toThrow(Error(error))
    }

    test('should raise error', () => {
      givenSearchContext(false)
      thenSearchQueryShouldThrowException(
        'the component must be in Search context'
      )
    })
  })
})
