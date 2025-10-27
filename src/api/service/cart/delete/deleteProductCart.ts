import { ICart } from '@/@interface/api/ICart'
import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'
import { removeFromCart } from '@/utils/localStorage/Cart'

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function deleteproductCart(productId: number): Promise<IResponse<ICart>> {
  try {
    let loading = true
    await wait(500)
    loading = false
    const removeCart = removeFromCart(productId)

    return {
      data: removeCart,
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
