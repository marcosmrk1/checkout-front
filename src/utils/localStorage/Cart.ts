import { IProduct } from '@/@interface/api/IProduct'
import { access } from 'fs'
import { parse } from 'path'
import { ICart, ICartItem } from '@/@interface/api/ICart'

export const LOCA_STORAGE_CART = 'checkout:cart'

export function getCart(): ICart {
  if (typeof window === 'undefined') return { itens: [], total: 0 }
  const cart = localStorage.getItem(LOCA_STORAGE_CART)
  if (!cart) return { itens: [], total: 0 }

  const parsed = JSON.parse(cart)
  if (Array.isArray(parsed)) {
    const totalPrice = parsed.reduce(
      (acc, el) => acc + el.product.price * el.quantity,
      0,
    )
    return { itens: parsed, total: totalPrice }
  }
  localStorage.removeItem(LOCA_STORAGE_CART)
  return { itens: [], total: 0 }
}

export function setCart(cart: ICart) {
  localStorage.setItem(LOCA_STORAGE_CART, JSON.stringify(cart.itens))
}

export function addToCart(product: IProduct) {
  const cart = getCart()

  const cartitemIndex = cart.itens.findIndex(
    (el: ICartItem) => el.product.id === product.id,
  )
  if (cartitemIndex > -1) {
    cart.itens[cartitemIndex].quantity += 1
  } else {
    cart.itens.push({ product, quantity: 1 })
  }
  cart.total = cart.itens.reduce(
    (acc: number, el: ICartItem) => acc + el.product.price * el.quantity,
    0,
  )
  setCart(cart)
}
