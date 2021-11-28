import { useCallback, useState } from 'react'
import { SEARCH_GH_REPOS } from '../../service/queries/queries'
import { useQuery } from '@apollo/client'
import * as R from 'ramda'

export function useResults(query) {
  const [page, setPage] = useState(1)

  const queryWithQualifier = `${query} in:name`
  const {
    data = {},
    loading,
    fetchMore,
  } = useQuery(SEARCH_GH_REPOS, {
    variables: {
      query: queryWithQualifier,
    },
  })

  const {
    search: {
      pageInfo: { hasNextPage, hasPreviousPage, endCursor } = {},
      edges = [],
    } = {},
  } = data

  const fetchMoreData = useCallback(async () => {
    await fetchMore({
      variables: { after: endCursor },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        return R.over(
          R.lensPath(['search', 'edges']),
          R.union(R.path(['search', 'edges'], previousQueryResult)),
          fetchMoreResult
        )
      },
    })
  }, [endCursor, fetchMore])

  return {
    loading,
    data: edges,
    fetchMoreData,
    hasNextPage,
    hasPreviousPage,
  }
}
