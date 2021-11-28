import { useIssues } from './useIssues'
import { ISSUE_STATE } from '../../config/constant'
import { CgDebug } from 'react-icons/cg'
import { Link, List } from '../../base-components'

export function Issues({ id: repoId, name, owner }) {
  const {
    loading,
    data,
    // fetchMoreData,
    // hasNextPage,
    // hasPreviousPage,
    // status,
    updateStatus,
  } = useIssues(name, owner)
  if (loading) return <div data-testid="issues">Loading...</div>

  if (data.length === 0) return <div data-testid="issues">No open issues</div>

  return (
    <div data-testid="issues">
      <div>
        <span onClick={() => updateStatus(ISSUE_STATE[0])}>Open</span>
        <span onClick={() => updateStatus(ISSUE_STATE[1])}>Closed</span>
      </div>
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
    </div>
  )
}
