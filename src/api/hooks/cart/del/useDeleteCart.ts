import { useCallback } from 'react'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCartStore } from '@/store/cartStore'

const useDeleteCart = () => {
  const { removeCart, loading } = useCartStore()

  const handleDelete = useCallback(async () => {
    const response = await removeCart()
    if (response.success) {
      ShowGenericToast({
        type: 'success',
        message: 'Carrinho removido com sucesso.',
      })
    } else {
      ShowGenericToast({
        type: 'error',
        message: 'Erro ao remover o carrinho.',
      })
    }
  }, [removeCart])

  return {
    handleDelete,
    loading,
  }
}

export default useDeleteCart
