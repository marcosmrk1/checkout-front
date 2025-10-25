import { IProduct } from '@/@interface/api/IProduct'
export enum ORDER_REVIEW {
  REVIEW_CART = 'reviewCart',
  WAIT_CONFIRM = 'waitConfirm',
  CONFIRMED_ORDER = 'confirmedOrder',
  EXPIRED_ORDER = 'expiredOrder',
}
export enum METHOD_PAYMENT {
  CREDIT_CARD = 'creditCard',
  PIX = 'pix',
  PAYMENT_SLIP = 'paymentSlip',
}
export interface ICartItem {
  product: IProduct
  quantity: number
}
export interface ICart {
  itens: ICartItem[]
  total: number
  orderReview:
    | ORDER_REVIEW.REVIEW_CART
    | ORDER_REVIEW.WAIT_CONFIRM
    | ORDER_REVIEW.EXPIRED_ORDER
    | ORDER_REVIEW.CONFIRMED_ORDER
  metodPayment?:
    | METHOD_PAYMENT.CREDIT_CARD
    | METHOD_PAYMENT.PIX
    | METHOD_PAYMENT.PAYMENT_SLIP
}
