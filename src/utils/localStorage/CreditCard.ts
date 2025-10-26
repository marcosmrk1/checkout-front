export const CREDIT_CARD_STORAGE_KEY = 'checkout:creditCardInfo'

interface ICreditCard {
  last4Number: string
}
export const addCreditCardInfo = (cardInfo: ICreditCard): ICreditCard => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CREDIT_CARD_STORAGE_KEY, JSON.stringify(cardInfo))
  }
  return cardInfo
}
export const getCreditCardInfo = (): ICreditCard | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(CREDIT_CARD_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }
  return null
}
