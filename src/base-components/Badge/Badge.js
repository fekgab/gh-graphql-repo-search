import { Label } from './Badge.sc'

function Badge({ children, ...rest }) {
  return (
    <Label {...rest} data-testid="badge">
      {children}
    </Label>
  )
}

export default Badge
