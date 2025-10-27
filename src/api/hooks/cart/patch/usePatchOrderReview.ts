import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStore } from '@/store/cartStore'
import { useCallback } from 'react'

const usePatchOrderReview = () => {
  const { patchOrderReviewCart, loading, success, errors } = useCartStore()

  const handlePatchOrderReview = useCallback(
    async (orderReview: ORDER_REVIEW) => {
      const response = await patchOrderReviewCart(orderReview)

      if (response.success) {
        ShowGenericToast({
          type: 'success',
          message: 'Review do pedido atualizado com successo.',
        })
        return
      }
      ShowGenericToast({
        type: 'error',
        message: 'Pedido falhou, tente novamente',
      })
    },
    [patchOrderReviewCart, success, errors],
  )

  return { handlePatchOrderReview, loading, success, errors }
}

export default usePatchOrderReview
