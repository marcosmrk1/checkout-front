import { useCartStoreReview } from '@/store/cartStore'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCallback } from 'react'

const useGetAllCartProducts = () => {
  const { fetchCart, data, loading, success, errors } = useCartStoreReview()

  const handleGetAllCartProducts = useCallback(async () => {
    await fetchCart()
  }, [fetchCart, success, errors])

  return {
    handleGetAllCartProducts,
    data,
    loading,
    success,
    errors,
  }
}

export default useGetAllCartProducts
