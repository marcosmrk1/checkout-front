import { IResponse } from '@/@interface/response/Iresponse'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { ICreditCard } from '@/@interface/api/ICardCredit'
import { addCreditCardInfo } from '@/utils/localStorage/CreditCard'

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function usePostCardCredit(cardCredit: ICreditCard): IResponse<ICreditCard> {
  try {
    let loading = true
    wait(500)
    loading = false
    const addCartCredit = addCreditCardInfo(cardCredit)
    ShowGenericToast({ type: 'success' })

    return {
      data: addCartCredit,
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
