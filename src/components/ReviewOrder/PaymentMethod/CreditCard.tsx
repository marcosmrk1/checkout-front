'use client'

import { useState } from 'react'
import { CreditCard, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PaymentMethodSelector } from '@/components/ReviewOrder/PaymentMethod/MethodSelect'
import { PaymentMethodItem } from '@/components/ReviewOrder/PaymentMethod/PaymenteMethod'

const CreditCardMethodPayment = () => {
  return (
    <PaymentMethodItem
      description="Pague com segurança usando seu cartão de crédito. 
      Aceitamos as principais bandeiras e oferecemos 
      um processo de pagamento rápido e protegido para sua conveniência."
      icon={CreditCard}
      title="Cartão de Crédito"
      defaultOpen={false}
      Children={<></>}
    />
  )
}

export { CreditCardMethodPayment }
