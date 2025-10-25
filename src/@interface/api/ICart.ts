import { IProduct } from '@/@interface/api/IProduct'
export enum ORDER_REVIEW {
  REVIEW_CART = 'reviewCart',
  CONFIRM_ORDER = 'confirmOrder',
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
    | ORDER_REVIEW.CONFIRM_ORDER
    | ORDER_REVIEW.EXPIRED_ORDER
  metodPayment?:
    | METHOD_PAYMENT.CREDIT_CARD
    | METHOD_PAYMENT.PIX
    | METHOD_PAYMENT.PAYMENT_SLIP
}
