import { ICart, ORDER_REVIEW } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { updateOrderReview } from '@/utils/localStorage/Cart'
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function usePatchOrderReviewCart(
  orderReview: ORDER_REVIEW,
): Promise<IResponse<ICart>> {
  let loading = true
  try {
    await wait(500)
    loading = false
    const changeOrderReview = updateOrderReview(orderReview)
    console.log('o q vem do usePatch:', orderReview)
    if (orderReview === ORDER_REVIEW.WAIT_CONFIRM) {
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
    loading = false
    return {
      data: null,
      success: false,
      message: 'Erro ao adicionar produto ao carrinho.',
      errors: [String(error)],
      loading,
      statusCode: 500,
      timestamp: new Date().toISOString(),
    }
  }
}
