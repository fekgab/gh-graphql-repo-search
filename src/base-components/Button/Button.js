import { PrimaryButton } from './Button.sc'

function Button({ children, onClick, ...rest }) {
  return (
    <PrimaryButton onClick={onClick} {...rest} data-testid="button">
      {children}
    </PrimaryButton>
  )
}

export default Button
