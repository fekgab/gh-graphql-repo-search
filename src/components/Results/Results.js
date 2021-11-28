import 'intersection-observer'
import useInView from 'react-cool-inview'
import { CgLink } from 'react-icons/cg'
import { LoadingMore, Title } from './Results.sc'
import { useResults } from './useResults'
import { useState } from 'react'
import { Status } from '../Status/Status'
import { Link, List } from '../../base-components'

export function Results({ query }) {
  const [moreDataLoading, setMoreDataLoading] = useState(false)
  const { data, loading, fetchMoreData, hasNextPage } = useResults(query)

  const { observe } = useInView({
    rootMargin: '50px 0px',
    onEnter: async ({ unobserve }) => {
      unobserve()
      if (hasNextPage) {
        setMoreDataLoading(true)
        await fetchMoreData()
        setMoreDataLoading(false)
      }
    },
  })

  if (loading) return <div data-testid="results">Loading...</div>

  if (data.length === 0)
    return (
      <div data-testid="results">
        No matching repo was found, with the name: <strong>{query}</strong>
      </div>
    )

  return (
    <div data-testid="results">
      <List>
        {data.map((repos, idx) => {
          const {
            node: {
              id,
              name,
              owner: { login },
              url,
              forkCount,
              issues: { totalCount },
              description,
            },
          } = repos
          return (
            <li
              key={`${login}_${name}_${id}`}
              ref={idx === data.length - 1 ? observe : null}
            >
              <div>
                <Title>
                  {`${login}/${name}`}
                  <Link
                    href={url}
                    title={`${login}/${name} - ${url}`}
                    target="_blank"
                  >
                    <CgLink />
                  </Link>
                </Title>
                <p>{description}</p>
                <Status
                  name={name}
                  owner={login}
                  forkCount={forkCount}
                  issueTotalCount={totalCount}
                />
              </div>
            </li>
          )
        })}
        {moreDataLoading && <LoadingMore>Loading...</LoadingMore>}
      </List>
    </div>
  )
}
