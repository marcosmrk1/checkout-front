import { addToCart } from '@/utils/localStorage/Cart'
import { IProduct } from '@/@interface/api/IProduct'
import { ICart } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function postAddProductCart(product: IProduct): Promise<IResponse<ICart>> {
  try {
    let loading = true
    await wait(500)
    loading = false
    const addCart = addToCart(product)

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
