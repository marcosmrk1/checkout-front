export enum IMethodsPayment {
  Pix = 'pix',
  CreditCard = 'creditCard',
  Ticket = 'ticket',
}
export interface IMethodDescriptionSelect {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  method: IMethodsPayment
}
