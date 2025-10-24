import { ICart } from '@/@interface/api/ICart'
import { IProduct } from '@/@interface/api/IProduct'

export const LOCA_STORAGE_CART = 'checkout:cart'

export function getCart(): ICart[] {
  if (typeof window === 'undefined') return []
  const cart = localStorage.getItem(LOCA_STORAGE_CART)
  if (!cart) return []

  const parsed = JSON.parse(cart)
  if (Array.isArray(parsed)) {
    return parsed
  }
  localStorage.removeItem(LOCA_STORAGE_CART)
  return []
}

export function setCart(cart: ICart[]) {
  localStorage.setItem(LOCA_STORAGE_CART, JSON.stringify(cart))
}

export function addToCart(product: IProduct): ICart[] {
  const cart = getCart()
  const index = cart.findIndex((item) => item.product.id === product.id)
  if (index > -1) {
    cart[index].quantity += 1
  } else {
    cart.push({ product, quantity: 1 })
  }
  setCart(cart)
  return cart
}
