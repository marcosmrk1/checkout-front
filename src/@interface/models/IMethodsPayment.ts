import { METHOD_PAYMENT } from '@/@interface/api/ICart'

export interface IMethodDescriptionSelect {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  method: METHOD_PAYMENT
}
