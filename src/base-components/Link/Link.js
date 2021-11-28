import { Anchor } from './Link.sc'

function Link({ children, ...rest }) {
  return (
    <Anchor {...rest} data-testid="link">
      {children}
    </Anchor>
  )
}

export default Link
