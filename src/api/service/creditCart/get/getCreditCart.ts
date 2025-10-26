import { ICardCredit } from '@/@interface/api/ICardCredit'
import { IResponse } from '@/@interface/response/Iresponse'
import { getCreditCardInfo } from '@/utils/localStorage/CreditCard'

export const getCreditCart = async (): Promise<IResponse<ICardCredit>> => {
  await new Promise((r) => setTimeout(r, 500))
  const data = getCreditCardInfo()
  return {
    data,
    loading: false,
    success: true,
    message: 'Cartão carregado do localStorage',
    statusCode: 200,
    timestamp: new Date().toISOString(),
    errors: [],
  }
}
