import { ICart, ORDER_REVIEW } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'
import { ShowGenericToast } from '@/components/Generic/SuccessToast'
import { updateOrderReview } from '@/utils/localStorage/Cart'
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function usePatchOrderReviewCart(
  orderReview:
    | ORDER_REVIEW.REVIEW_CART
    | ORDER_REVIEW.METHOD_PAYMENT
    | ORDER_REVIEW.CONFIRM_ORDER
    | ORDER_REVIEW.EXPIRED_ORDER,
): IResponse<ICart> {
  try {
    let loading = true
    wait(500)
    loading = false
    const changeOrderReview = updateOrderReview(orderReview)
    if (orderReview === ORDER_REVIEW.CONFIRM_ORDER) {
      ShowGenericToast({ type: 'success' })
    }
    if (orderReview === ORDER_REVIEW.EXPIRED_ORDER) {
      ShowGenericToast({
        type: 'error',
        message:
          'O tempo para finalizar o pedido expirou. Por favor, reinicie seu pedido.',
      })
    }

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
