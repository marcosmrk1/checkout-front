import { METHOD_PAYMENT } from '@/@interface/api/ICart'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStore } from '@/store/cartStore'
import { useCallback } from 'react'

const usePatchMethodPayment = () => {
  const { patchMethodPayment, loading, errors, success } = useCartStore()

  const handleChangeMethodPayment = useCallback(
    async (methodPayment: METHOD_PAYMENT) => {
      const response = await patchMethodPayment(methodPayment)
      if (response.success) {
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
