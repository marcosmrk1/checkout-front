import { ICart } from '@/@interface/api/ICart'
import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { removeFromCart } from '@/utils/localStorage/Cart'

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function useDeleteRemoveItemCard(product: IProduct): IResponse<ICart> {
  try {
    let loading = true
    wait(500)
    loading = false
    const removeCart = removeFromCart(product.id)
    ShowGenericToast({ type: 'success', message: 'Produto do carrinho removido!' })

    return {
      data: removeCart,
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
