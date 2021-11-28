import { UnStyledList } from './List.sc'

function List({ children, ...rest }) {
  return (
    <UnStyledList {...rest} data-testid="list">
      {children}
    </UnStyledList>
  )
}

export default List
