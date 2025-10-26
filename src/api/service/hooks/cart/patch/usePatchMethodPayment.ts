import { METHOD_PAYMENT } from '@/@interface/api/ICart'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStoreReview } from '@/store/cartStore'
import { useCallback } from 'react'

const usePatchMethodPayment = () => {
  const { patchMethodPayment, loading, errors, success } = useCartStoreReview()

  const handleChangeMethodPayment = useCallback(
    async (methodPayment: METHOD_PAYMENT) => {
      await patchMethodPayment(methodPayment)
      if (success) {
        ShowGenericToast({
          type: 'success',
          message: 'Método de pagamento atualizado com sucesso.',
        })
      } else {
        ShowGenericToast({
          type: 'error',
        })
      }
    },
    [patchMethodPayment, success],
  )

  return { handleChangeMethodPayment, loading }
}
export default usePatchMethodPayment
