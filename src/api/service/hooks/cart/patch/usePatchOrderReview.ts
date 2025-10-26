import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStoreReview } from '@/store/cartStore'
import { useCallback } from 'react'

const usePatchOrderReview = () => {
  const { patchOrderReviewCart, loading, success, errors } = useCartStoreReview()

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
    },
    [patchOrderReviewCart, success, errors],
  )

  return { handlePatchOrderReview, loading, success, errors }
}

export default usePatchOrderReview
