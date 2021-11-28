import { CgChevronDown, CgChevronUp, CgDebug, CgGitFork } from 'react-icons/cg'
import { Badge } from '../../base-components'
import { useState } from 'react'
import { Issues } from '../Issues/Issues'

export function Status({ id, name, owner, forkCount, issueTotalCount }) {
  const [showIssues, setShowIssues] = useState(false)

  return (
    <div data-testid="status">
      <div>
        <Badge onClick={() => setShowIssues(!showIssues)}>
          <CgDebug />
          {issueTotalCount}
          {showIssues ? <CgChevronDown /> : <CgChevronUp />}
        </Badge>
        <Badge>
          <CgGitFork />
          {forkCount}
        </Badge>
      </div>
      {showIssues && <Issues name={name} id={id} owner={owner} />}
    </div>
  )
}
