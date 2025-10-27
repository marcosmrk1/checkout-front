import { useCartStore } from '@/store/cartStore'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCallback } from 'react'
import { IProduct } from '@/@interface/api/IProduct'

const usePostCartProducts = () => {
  const { addProduct, loading, success, errors } = useCartStore()

  const handleAddProduct = useCallback(
    async (product: IProduct) => {
      const response = await addProduct(product)
      if (response.success) {
        ShowGenericToast({
          type: 'success',
          message: 'Produto adicionado ao carrinho com sucesso.',
        })
      } else {
        ShowGenericToast({
          type: 'error',
          message: Array.isArray(errors) ? errors.join(', ') : errors,
        })
      }
    },
    [addProduct, success, errors],
  )

  return {
    handleAddProduct,
    loading,
    success,
    errors,
  }
}

export default usePostCartProducts
