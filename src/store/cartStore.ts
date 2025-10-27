import { create } from 'zustand'
import { ICart, METHOD_PAYMENT } from '@/@interface/api/ICart'
import {
  getCart,
  setCart,
  addToCart,
  removeFromCart,
  deleteCart,
} from '@/utils/localStorage/Cart'
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

  patchMethodPayment: (methodPayment: METHOD_PAYMENT) => Promise<any>
  patchOrderReviewCart: (orderReview: ORDER_REVIEW) => Promise<any>
  deleteItemCart: (productId: number) => Promise<any>
  addProduct: (product: IProduct) => Promise<any>
  removeQuantityProductCart: (product: IProduct) => Promise<any>
  addQuantityProductCart: (product: IProduct) => Promise<any>
  removeCart: () => Promise<any> // <-- aqui!
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

export const useCartStore = create<CartState>((set, get) => ({
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
      return { success: response.success, response }
    } catch (err: any) {
      set({ errors: [err.message], loading: false, success: false })
      return { success: false, message: err.message, response: null }
    }
  },

  deleteItemCart: async (productId: number) => {
    set({ loading: true, success: false })
    try {
      const response = await deleteproductCart(productId)
      await get().fetchCart()
      set({ loading: false, success: true })
      return { success: true, response }
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message, response: null }
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
      return { success: response.success, response }
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message, response: null }
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
      return { success: response.success, response }
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message, response: null }
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
      return { success: response.success, response }
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message, response: null }
    }
  },

  patchOrderReviewCart: async (orderReview: ORDER_REVIEW) => {
    set({ loading: true, success: false })
    try {
      const response = await patchOrderReview(orderReview)
      await get().fetchCart()
      const isFailed = response.data?.orderReview === ORDER_REVIEW.FAILED
      const isSuccess = response.success && !isFailed
      set({ loading: false, success: isSuccess })
      return {
        success: isSuccess,
        response,
      }
    } catch (err: any) {
      set({ success: false, loading: false })
      return { success: false, message: err.message, response: null }
    }
  },
  removeCart: async () => {
    set({ loading: true, success: false })
    try {
      await deleteCart()
      const emptyCart = getCart()
      set({ data: emptyCart, loading: false, success: true })
      return { success: true }
    } catch (err: any) {
      set({ loading: false, success: false })
      return { success: false, message: err.message }
    }
  },
}))
