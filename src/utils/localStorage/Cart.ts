import { IProduct } from '@/@interface/api/IProduct'

import { ICart, ICartItem, ORDER_REVIEW, METHOD_PAYMENT } from '@/@interface/api/ICart'

export const LOCA_STORAGE_CART = 'checkout:cart'
const initialValuesCart: ICart = {
  itens: [] as ICartItem[],
  total: 0,
  orderReview: ORDER_REVIEW.REVIEW_CART,
  totalQuantity: 0,
}
export function getCart(): ICart {
  if (typeof window === 'undefined') return initialValuesCart
  const cart = localStorage.getItem(LOCA_STORAGE_CART)
  if (!cart) return initialValuesCart

  const parsed = JSON.parse(cart)
  if (parsed && Array.isArray(parsed.itens)) {
    const totalPrice = parsed.itens.reduce(
      (acc: number, el: ICartItem) => acc + el.product.price * el.quantity,
      0,
    )
    const totalQuantity = parsed.itens.reduce(
      (acc: number, el: ICartItem) => acc + el.quantity,
      0,
    )
    return {
      itens: parsed.itens,
      total: parsed.total ?? totalPrice,
      totalQuantity: parsed.totalQuantity ?? totalQuantity,
      orderReview: parsed.orderReview ?? ORDER_REVIEW.REVIEW_CART,
      metodPayment: parsed.metodPayment,
    }
  }
  localStorage.removeItem(LOCA_STORAGE_CART)
  return initialValuesCart
}
export function deleteCart() {
  localStorage.setItem(LOCA_STORAGE_CART, JSON.stringify(initialValuesCart))
}
export function setCart(cart: ICart) {
  localStorage.setItem(LOCA_STORAGE_CART, JSON.stringify(cart))
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
  cart.totalQuantity = cart.itens.reduce(
    (acc: number, el: ICartItem) => acc + el.quantity,
    0,
  )
  setCart(cart)
  return cart
}
export function removeFromCart(productId: number) {
  const cart = getCart()
  const itemIndex = cart.itens.findIndex(
    (item: ICartItem) => item.product.id === productId,
  )
  if (itemIndex > -1) {
    cart.itens.splice(itemIndex, 1)
    cart.total = cart.itens.reduce((acc, el) => acc + el.product.price * el.quantity, 0)
    setCart(cart)
  }
  return cart
}
function updateProductQuantity(productId: number, delta: number) {
  const cart = getCart()
  const itemIndex = cart.itens.findIndex(
    (item: ICartItem) => item.product.id === productId,
  )
  if (itemIndex > -1) {
    cart.itens[itemIndex].quantity += delta
    if (cart.itens[itemIndex].quantity <= 0) {
      cart.itens.splice(itemIndex, 1)
    }
    cart.total = cart.itens.reduce((acc, el) => acc + el.product.price * el.quantity, 0)
    setCart(cart)
    return cart
  }
  return cart
}

export function decreaseProductQuantity(productId: number) {
  return updateProductQuantity(productId, -1)
}

export function AddProductQuantity(productId: number) {
  return updateProductQuantity(productId, 1)
}

export function updateOrderReview(
  orderReview:
    | ORDER_REVIEW.REVIEW_CART
    | ORDER_REVIEW.WAIT_CONFIRM
    | ORDER_REVIEW.CONFIRMED_ORDER
    | ORDER_REVIEW.EXPIRED_ORDER,
) {
  const cart = getCart()
  cart.orderReview = orderReview
  setCart(cart)
  return cart
}

export function updateMethodPayment(
  metodPayment:
    | METHOD_PAYMENT.CREDIT_CARD
    | METHOD_PAYMENT.PIX
    | METHOD_PAYMENT.PAYMENT_SLIP,
) {
  const cart = getCart()
  cart.metodPayment = metodPayment
  setCart(cart)
  return cart
}
