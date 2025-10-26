import { ICardCredit } from '@/@interface/api/ICardCredit'
import { IResponse } from '@/@interface/response/Iresponse'
import { getCreditCart } from '@/api/service/creditCart/get/getCreditCart'
import { addCreditCardInfo } from '@/utils/localStorage/CreditCard'
import { create } from 'zustand'

interface CartCreditState {
  creditCardInfo: IResponse<ICardCredit> | null
  fetchCreditCardInfo: () => Promise<void>
  loading: boolean
  success: boolean
  errors: string[]
  postCreditCardInfo: (cardInfo: ICardCredit) => Promise<any>
}
export const useCartCreditStore = create<CartCreditState>((set, get) => ({
  creditCardInfo: null,
  loading: false,
  success: false,
  errors: [],
  fetchCreditCardInfo: async () => {
    set({ creditCardInfo: null })
    try {
      const response: IResponse<ICardCredit> = await getCreditCart()
      set({ creditCardInfo: response })
    } catch (error) {
      set({ creditCardInfo: null })
    }
    set({ loading: false, success: false })
  },
  postCreditCardInfo: async (cardInfo: ICardCredit) => {
    set({ loading: true, success: false })
    try {
      const response = addCreditCardInfo(cardInfo)
      await get().fetchCreditCardInfo()
      const creditCardResponse: IResponse<ICardCredit> = await getCreditCart()
      set({
        creditCardInfo: creditCardResponse,
        loading: false,
        success: true,
        errors: [],
      })
      return { success: true, response }
    } catch (error: any) {
      set({ success: false, loading: false, errors: [error.message] })
      return { success: false, message: error.message }
    }
  },
}))
