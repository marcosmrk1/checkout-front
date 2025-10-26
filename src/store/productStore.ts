import { create } from 'zustand'
import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'
import { getAllProducts } from '@/api/service/products/get/getAllProducts'

interface ProductStore {
  productsData: IResponse<IProduct[]> | null

  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductStore>((set) => ({
  productsData: null,
  fetchProducts: async () => {
    const response = await getAllProducts()
    set({
      productsData: response,
    })
  },
}))
