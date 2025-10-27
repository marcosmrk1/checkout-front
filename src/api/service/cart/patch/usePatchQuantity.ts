import { AddProductQuantity, decreaseProductQuantity } from '@/utils/localStorage/Cart'
import { IProduct } from '@/@interface/api/IProduct'
import { ICart } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function addQuantityProduct(product: IProduct): IResponse<ICart> {
  try {
    let loading = true
    wait(500)
    loading = false
    const addCart = AddProductQuantity(product.id)

    return {
      data: addCart,
      success: true,
      message: 'Produto adicionado ao carrinho com sucesso.',
      errors: [],
      loading,
      statusCode: 201,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      data: null,
      success: false,
      message: 'Erro ao adicionar produto ao carrinho.',
      errors: [String(error)],
      loading: false,
      statusCode: 500,
      timestamp: new Date().toISOString(),
    }
  }
}
export function decreaseQuantityProduct(product: IProduct): IResponse<ICart> {
  try {
    let loading = true
    wait(500)
    loading = false
    const addCart = decreaseProductQuantity(product.id)

    return {
      data: addCart,
      success: true,
      message: 'Produto removido do carrinho com sucesso.',
      errors: [],
      loading,
      statusCode: 201,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      data: null,
      success: false,
      message: 'Erro ao remover produto do carrinho.',
      errors: [String(error)],
      loading: false,
      statusCode: 500,
      timestamp: new Date().toISOString(),
    }
  }
}
