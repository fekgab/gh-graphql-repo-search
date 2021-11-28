import { useCallback, useState } from 'react'
import { GET_GH_REPO_ISSUES } from '../../service/queries/queries'
import { useQuery } from '@apollo/client'
import { ISSUE_STATE } from '../../config/constant'

export function useIssues(name, owner) {
  const [status, setStatus] = useState(ISSUE_STATE[0])

  const {
    data = {},
    loading,
    fetchMore,
  } = useQuery(GET_GH_REPO_ISSUES, {
    variables: {
      name,
      owner,
      status,
    },
  })

  const {
    repository: {
      issues: {
        pageInfo: { hasNextPage, hasPreviousPage, endCursor, startCursor } = {},
        edges = [],
      } = {},
    } = {},
  } = data

  const fetchMoreData = useCallback(
    async (isNext) => {
      const variables = isNext ? { after: endCursor } : { before: startCursor }
      await fetchMore({
        variables,
        updateQuery: ({ fetchMoreResult }) => fetchMoreResult,
      })
    },
    [endCursor, fetchMore, startCursor]
  )

  const updateStatus = useCallback((status) => setStatus(status), [])

  return {
    loading,
    data: edges,
    fetchMoreData,
    hasNextPage,
    hasPreviousPage,
    status,
    updateStatus,
  }
}
