import { toast } from 'react-toastify'
import { Error } from '../base-components'

export const getUserToken = () => {
  const token = process.env.REACT_APP_AUTH_TOKEN
  return token ? `Bearer ${token}` : ''
}

export const toastError = (message) =>
  toast.error(<Error message={message} />, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
