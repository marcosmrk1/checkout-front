import { ICart, ORDER_REVIEW } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'
import { ShowGenericToast } from '@/components/Generic/SuccessToast'
import { updateOrderReview } from '@/utils/localStorage/Cart'
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function usePatchOrderReviewCart(orderReview: ORDER_REVIEW): IResponse<ICart> {
  try {
    let loading = true
    wait(500)
    loading = false
    const changeOrderReview = updateOrderReview(orderReview)
    ShowGenericToast({ type: 'success' })

    return {
      data: changeOrderReview,
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
