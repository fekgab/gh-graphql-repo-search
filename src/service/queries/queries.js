import { gql } from '@apollo/client'
import { DEFAULT_PER_PAGE } from '../../config/constant'
import { PAGE_INFO } from '../fragments/fragments'

export const SEARCH_GH_REPOS = gql`
    ${PAGE_INFO}
    query searchRepos(
        $query: String!
        $after: String
    ) {
        search(
            query: $query
            type: REPOSITORY
            first: ${DEFAULT_PER_PAGE}
            after: $after
        ) {
            repositoryCount
            pageInfo {
                ...PageInfo
            }
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        owner { login }
                        updatedAt
                        url
                        forkCount
                        issues(filterBy: {states: OPEN}) {
                            totalCount
                        }
                        description
                    }
                }
            }
        }
    }
`

export const GET_GH_REPO_ISSUES = gql`
  ${PAGE_INFO}
  query getRepoIssues(
    $name: String!
    $owner: String!
    $status: [IssueState!]
    $after: String
    $before: String
  ) {
    repository(name: $name, owner: $owner) {
      issues(
        first: 5
        after: $after
        before: $before
        filterBy: { states: $status }
      ) {
        pageInfo {
          ...PageInfo
        }
        edges {
          ... on IssueEdge {
            node {
              ... on Issue {
                title
                url
                id
              }
            }
          }
        }
      }
    }
  }
`
