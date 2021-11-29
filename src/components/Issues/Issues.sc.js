import styled from '@emotion/styled/macro'
import { css } from '@emotion/react/macro'

export const StatusContainer = styled.div`
  margin-bottom: 1em;
  border-bottom: 1px solid #000;
`

export const PaginationContainer = styled.div`
  padding: 1em 0;
`

export const Status = styled.span`
  padding: 1em;
  display: inline-flex;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid #00008bff;
      font-weight: 600;
    `}
`
