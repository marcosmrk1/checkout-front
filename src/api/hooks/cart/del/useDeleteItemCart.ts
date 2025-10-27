import { useCallback } from 'react'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStore } from '@/store/cartStore'

const useDeleteItemCart = () => {
  const { deleteItemCart, loading, success } = useCartStore()

  const handleDelete = useCallback(
    async (productId: number) => {
      const response = await deleteItemCart(productId)
      if (response) {
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
