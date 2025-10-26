import { create } from 'zustand'
import { ICart, METHOD_PAYMENT } from '@/@interface/api/ICart'
import { getCart, setCart, addToCart, removeFromCart } from '@/utils/localStorage/Cart'
import { IProduct } from '@/@interface/api/IProduct'
import { getAllProductCart } from '@/api/service/cart/get/getAllProductCart'
import { IResponse } from '@/@interface/response/Iresponse'
import { postAddProductCart } from '@/api/service/cart/post/postAddProductCart'
import {
  addQuantityProduct,
  decreaseQuantityProduct,
} from '@/api/service/cart/patch/usePatchQuantity'
import { patchMethodPayment } from '@/api/service/cart/patch/patchMethodPayment'
import { deleteproductCart } from '@/api/service/cart/delete/deleteProductCart'

import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { patchOrderReview } from '@/api/service/cart/patch/patchOrderReview'

interface CartState {
  data: ICart | null
  fetchCart: () => Promise<void>
  success: boolean
  loading: boolean
  errors: string[] // <-- Adicione esta linha

  patchMethodPayment: (methodPayment: METHOD_PAYMENT) => void
  patchOrderReviewCart: (orderReview: ORDER_REVIEW) => void
  deleteItemCart: (productId: number) => void
  addProduct: (product: IProduct) => void
  removeQuantityProductCart: (product: IProduct) => void
  addQuantityProductCart: (product: IProduct) => void
}

const cartInitialValues: IResponse<ICart> = {
  data: getCart(),
  success: false,
  message: '',
  errors: [],
  loading: false,
  statusCode: 0,
  timestamp: new Date().toISOString(),
}

export const useCartStoreReview = create<CartState>((set, get) => ({
  data: cartInitialValues.data,
  loading: cartInitialValues.loading,
  success: false,
  errors: [],

  fetchCart: async () => {
    set({ loading: true, success: false })
    try {
      const response: IResponse<ICart> = await getAllProductCart()
      set({
        data: response.data,
        loading: response.loading,
        success: response.success,
      })
    } catch (success: any) {
      set({
        loading: false,
        success: false,
      })
    }
    // Aqui pode resetar, pois é só carregamento
    set({ success: false })
  },

  patchMethodPayment: async (methodPayment: METHOD_PAYMENT) => {
    set({ loading: true, success: false })
    try {
      const response = await patchMethodPayment(methodPayment)
      await get().fetchCart()
      if (response.success) {
        set({ success: true, loading: false })
      } else {
        set({ errors: [response.message], loading: false, success: false })
      }
      return response
    } catch (err: any) {
      set({ errors: [err.message], loading: false, success: false })
      return { success: false, message: err.message }
    }
    // NÃO resetar aqui!
  },

  deleteItemCart: async (productId: number) => {
    set({ loading: true, success: false })
    try {
      const response = await deleteproductCart(productId)
      await get().fetchCart()
      set({ loading: false, success: true })
      return response
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message }
    }
  },

  addProduct: async (product: IProduct) => {
    set({ loading: true, success: false })
    try {
      const response = await postAddProductCart(product)
      await get().fetchCart()
      const cartResponse: IResponse<ICart> = await getAllProductCart()
      set({
        data: cartResponse.data,
        loading: false,
        success: cartResponse.success,
      })
      return response
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message }
    }
  },

  removeQuantityProductCart: async (product: IProduct) => {
    set({ loading: true, success: false })
    try {
      const response = await decreaseQuantityProduct(product)
      await get().fetchCart()
      const cartResponse: IResponse<ICart> = await getAllProductCart()
      set({
        data: cartResponse.data,
        loading: false,
        success: cartResponse.success,
      })
      return response
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message }
    }
  },

  addQuantityProductCart: async (product: IProduct) => {
    set({ loading: true, success: false })
    try {
      const response = await addQuantityProduct(product)
      await get().fetchCart()
      const cartResponse: IResponse<ICart> = await getAllProductCart()
      set({
        data: cartResponse.data,
        loading: false,
        success: cartResponse.success,
      })
      return response
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message }
    }
  },

  patchOrderReviewCart: async (orderReview: ORDER_REVIEW) => {
    set({ loading: true, success: false })
    try {
      const response = await patchOrderReview(orderReview)
      await get().fetchCart()
      if (response.success) {
        set({ loading: false, success: true })
      } else {
        set({ loading: false, success: false })
      }
      return response
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message }
    }
  },
}))
function fetchCart() {
  throw new Error('Function not implemented.')
}
