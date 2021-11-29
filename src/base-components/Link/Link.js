import { Anchor } from './Link.sc'

function Link({ children, ...rest }) {
  return (
    <Anchor {...rest} data-testid="link" tabIndex="0">
      {children}
    </Anchor>
  )
}

export default Link
