function Button({ children, onClick, ...rest }) {
  return (
    <button onClick={onClick} {...rest} data-testid="button">
      {children}
    </button>
  )
}

export default Button
