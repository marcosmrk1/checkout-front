import { ICart, METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'
import { updateMethodPayment, updateOrderReview } from '@/utils/localStorage/Cart'
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function patchMethodPayment(
  methodPayment: METHOD_PAYMENT,
): Promise<IResponse<ICart>> {
  let loading = true
  try {
    await wait(500)
    loading = false
    updateOrderReview(ORDER_REVIEW.WAIT_CONFIRM)
    const changeUpdateMethodPayment = updateMethodPayment(methodPayment)

    return {
      data: changeUpdateMethodPayment,
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
