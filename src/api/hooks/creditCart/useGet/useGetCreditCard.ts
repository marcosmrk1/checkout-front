import { useProductStore } from '@/store/productStore'
import { useEffect } from 'react'
import { IResponse } from '@/@interface/response/Iresponse'
import { ICardCredit } from '@/@interface/api/ICardCredit'
import { useCartCreditStore } from '@/store/cartCredit'

const useGetCreditCard = () => {
  const { creditCardInfo, fetchCreditCardInfo } = useCartCreditStore()

  useEffect(() => {
    fetchCreditCardInfo()
  }, [fetchCreditCardInfo])

  const response: IResponse<ICardCredit> = creditCardInfo ?? {
    data: null,
    loading: true,
    success: false,
    message: '',
    statusCode: 0,
    timestamp: new Date().toISOString(),
    errors: [],
  }

  return {
    ...response,
  }
}

export default useGetCreditCard
