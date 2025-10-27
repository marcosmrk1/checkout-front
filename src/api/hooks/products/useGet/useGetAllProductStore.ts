import { useProductStore } from '@/store/productStore'
import { useEffect } from 'react'
import { IResponse } from '@/@interface/response/Iresponse'
import { IProduct } from '@/@interface/api/IProduct'

const useGetAllProductStore = () => {
  const { fetchProducts, productsData } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const response: IResponse<IProduct[]> = productsData ?? {
    data: null,
    loading: true,
    success: false,
    message: '',
    statusCode: 0,
    timestamp: new Date().toISOString(),
    errors: [],
  }

  return {
    ...response,
    fetchProducts,
  }
}

export default useGetAllProductStore
