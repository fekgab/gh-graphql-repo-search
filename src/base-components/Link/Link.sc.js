import styled from '@emotion/styled/macro'

export const Anchor = styled.a`
  transition: color 0.25s ease-in-out;
  display: inline-flex;
  align-items: center;
  font-size: 1.15em;
  color: var(--primary-bg);

  &:hover {
    color: #var(--primary-bg-alpha);
  }
`
