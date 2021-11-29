import { useIssues } from './useIssues'
import { ISSUE_STATE } from '../../config/constant'
import { CgChevronLeft, CgChevronRight, CgDebug } from 'react-icons/cg'
import { Badge, Link, List } from '../../base-components'
import { PaginationContainer, Status, StatusContainer } from './Issues.sc'
import { makeClickProps } from '../../utils/helpers'

export function Issues({ name, owner }) {
  const {
    loading,
    data,
    fetchMoreData,
    hasNextPage,
    hasPreviousPage,
    status,
    updateStatus,
  } = useIssues(name, owner)

  function getIssuesList() {
    if (loading) return <div>Loading...</div>
    if (data.length === 0) return <div>No open issues</div>
    return (
      <List>
        {data.map(({ node: { title, url, id } }) => (
          <li key={id}>
            <CgDebug />
            <Link href={url} rel="" target="_blank">
              {title}
            </Link>
          </li>
        ))}
      </List>
    )
  }

  return (
    <div data-testid="issues">
      <StatusContainer>
        <Status
          {...makeClickProps(() => updateStatus(ISSUE_STATE[0]))}
          isActive={status === ISSUE_STATE[0]}
          tabIndex="0"
        >
          Open
        </Status>
        <Status
          {...makeClickProps(() => updateStatus(ISSUE_STATE[1]))}
          isActive={status === ISSUE_STATE[1]}
          tabIndex="0"
        >
          Closed
        </Status>
      </StatusContainer>
      {getIssuesList()}
      <PaginationContainer>
        <Badge
          {...makeClickProps(() => fetchMoreData(false))}
          disabled={!hasPreviousPage}
          tabIndex={hasPreviousPage ? 0 : -1}
        >
          <CgChevronLeft />
        </Badge>
        <Badge
          {...makeClickProps(() => fetchMoreData(true))}
          disabled={!hasNextPage}
          tabIndex={hasNextPage ? 0 : -1}
        >
          <CgChevronRight />
        </Badge>
      </PaginationContainer>
    </div>
  )
}
