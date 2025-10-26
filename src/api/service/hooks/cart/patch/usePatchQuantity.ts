import { useCartStoreReview } from '@/store/cartStore'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCallback } from 'react'
import { IProduct } from '@/@interface/api/IProduct'

const usePatchQuantity = () => {
  const { addQuantityProductCart, removeQuantityProductCart, loading, success, errors } =
    useCartStoreReview()

  const handleAddQuantity = useCallback(
    async (product: IProduct) => {
      await addQuantityProductCart(product)
      if (success) {
        ShowGenericToast({
          type: 'success',
          message: 'Quantidade aumentada com sucesso.',
        })
      } else {
        ShowGenericToast({
          type: 'error',
        })
      }
    },
    [addQuantityProductCart, success, errors],
  )

  const handleRemoveQuantity = useCallback(
    async (product: IProduct) => {
      await removeQuantityProductCart(product)
      if (success) {
        ShowGenericToast({
          type: 'success',
          message: 'Quantidade reduzida com sucesso.',
        })
      } else {
        ShowGenericToast({
          type: 'error',
        })
      }
    },
    [removeQuantityProductCart, success, errors],
  )

  return {
    handleAddQuantity,
    handleRemoveQuantity,
    loading,
    success,
    errors,
  }
}

export default usePatchQuantity
