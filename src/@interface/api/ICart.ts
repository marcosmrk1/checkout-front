import { IProduct } from '@/@interface/api/IProduct'

export interface ICartItem {
  product: IProduct
  quantity: number
}
export interface ICart {
  itens: ICartItem[]
  total: number
}
