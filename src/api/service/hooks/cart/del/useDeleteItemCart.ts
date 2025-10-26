import { useCallback } from 'react'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStoreReview } from '@/store/cartStore'

const useDeleteItemCart = () => {
  const { deleteItemCart, loading, success, fetchCart } = useCartStoreReview()

  const handleDelete = useCallback(
    async (productId: number) => {
      await deleteItemCart(productId)
      if (success) {
        ShowGenericToast({
          type: 'success',
          message: 'Produto removido do carrinho com sucesso.',
        })
      } else {
        ShowGenericToast({
          type: 'error',
          message: 'Erro ao remover produto do carrinho.',
        })
      }
    },
    [deleteItemCart, success],
  )

  return {
    deleteItemCart: handleDelete,
    loading,
    success,
  }
}

export default useDeleteItemCart
