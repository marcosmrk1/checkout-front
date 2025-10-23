'use client'
import { Checkbox } from '@/components/ui/checkbox'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, CreditCard, QrCode, Barcode } from 'lucide-react'
import { IMethodDescriptionSelect, IMethodsPayment } from '@/@interface/IMethodsPayment'

const methodsPayment: IMethodDescriptionSelect[] = [
  {
    id: 1,
    title: 'Pix',
    description:
      'O pagamento via Pix é rápido e seguro. Após a confirmação do pedido, você receberá um código QR ou chave Pix para efetuar o pagamento diretamente do seu aplicativo bancário. A compensação é instantânea, permitindo que seu pedido seja processado imediatamente.',
    icon: <QrCode />,
    isSelected: false,
    method: IMethodsPayment.Pix,
  },
  {
    id: 2,
    title: 'Cartão de Crédito',
    description:
      'Pague com seu cartão de crédito. Aceitamos as principais bandeiras e você pode parcelar em até 12 vezes.',
    icon: <CreditCard />,
    isSelected: false,
    method: IMethodsPayment.CreditCard,
  },
  {
    id: 3,
    title: 'Boleto Bancário',
    description:
      'O boleto bancário pode levar até 2 dias úteis para compensar. Após o pagamento, seu pedido será liberado automaticamente.',
    icon: <Barcode />,
    isSelected: false,
    method: IMethodsPayment.Ticket,
  },
]

const PaymentMethod = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleSelect = (id: number) => {
    setSelectedIndex(id)
  }

  return (
    <div>
      {methodsPayment.map((method) => (
        <div key={method.id} className="border rounded-lg overflow-hidden mb-4">
          <button
            onClick={() => handleSelect(method.id)}
            className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={selectedIndex === method.id}
                onCheckedChange={() => handleSelect(method.id)}
              />
              {method.icon}
              <span className="font-semibold">{method.title}</span>
            </div>
            {selectedIndex === method.id ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
          <div className="overflow-hidden">
            {selectedIndex === method.id && (
              <div className="p-4 pt-3 border-t bg-muted/50">
                <p className="p-4 pt-3">{method.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export { PaymentMethod }
