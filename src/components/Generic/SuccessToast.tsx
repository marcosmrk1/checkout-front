import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ToastType = 'success' | 'error'

interface PropsSuccessToast {
  type: ToastType
  message?: string
}

const ShowGenericToast = ({ type, message }: PropsSuccessToast) => {
  const defaultMessage = {
    success: 'Ação realizada com sucesso!',
    error: 'Ocorreu um erro!',
  }

  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  }

  toast[type](message ?? defaultMessage[type], options)
}
export { ShowGenericToast }
