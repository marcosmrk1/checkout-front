import { ICardCredit } from '@/@interface/api/ICardCredit'

export const CREDIT_CARD_STORAGE_KEY = 'checkout:creditCardInfo'

export const addCreditCardInfo = (cardInfo: ICardCredit): ICardCredit => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CREDIT_CARD_STORAGE_KEY, JSON.stringify(cardInfo))
  }
  return cardInfo
}
export const getCreditCardInfo = (): ICardCredit | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(CREDIT_CARD_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }
  return null
}
