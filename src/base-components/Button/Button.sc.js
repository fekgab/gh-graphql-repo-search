import styled from '@emotion/styled/macro'
import { css } from '@emotion/react/macro'

export const PrimaryButton = styled.button`
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  margin: 0 1em 0 0;
  padding: 0.15em 1em;
  border: 1px solid var(--primary);
  border-radius: 1em;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--primary-bg);
  color: var(--primary-inverse);

  &:focus-visible,
  &:hover {
    background-color: var(--primary-bg-alpha);
  }
`
