import { create } from 'zustand'
import { ICart, ICartItem } from '@/@interface/api/ICart'
import { getCart, setCart, addToCart, removeFromCart } from '@/utils/localStorage/Cart'
import { IProduct } from '@/@interface/api/IProduct'

interface CartState {
  cart: ICart
  refreshCart: () => void
  addProduct: (product: IProduct) => void
  removeProduct: (productId: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: getCart(),
  refreshCart: () => set({ cart: getCart() }),
  addProduct: (product) => {
    addToCart(product)
    set({ cart: getCart() })
  },
  removeProduct: (productId) => {
    removeFromCart(productId)
    set({ cart: getCart() })
  },
}))
