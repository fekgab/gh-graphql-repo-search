import { DEFAULT_ERROR } from '../../config/constant'

function Error({ message = DEFAULT_ERROR }) {
  return (
    <div data-testid="error">
      <p>
        <strong>Error Notification</strong>
      </p>
      <small>{message}</small>
    </div>
  )
}

export default Error
