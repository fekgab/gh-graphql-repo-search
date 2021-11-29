import styled from '@emotion/styled/macro'

export const Container = styled.main``

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 1em;
  background: var(--primary-inverse-alpha);
  box-shadow: 0 8px 32px 0 var(--primary-bg-alpha);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid var(--primary-inverse-alpha);
  height: 10em;
  display: flex;
  align-items: center;
  text-align: center;
`

export const Wrapper = styled.section`
  max-width: 75em;
  padding: 1em;
  margin: auto;
  width: 100%;
`
