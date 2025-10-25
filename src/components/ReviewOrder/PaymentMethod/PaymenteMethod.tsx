'use client'
import { Checkbox } from '@/components/ui/checkbox'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { ChevronDown, ChevronUp, CreditCard, QrCode, Barcode } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { CardForm } from '@/components/ReviewOrder/PaymentMethod/Form/Card'
import { METHOD_PAYMENT } from '@/@interface/api/ICart'
import { IMethodDescriptionSelect } from '@/@interface/models/IMethodsPayment'
interface IPaymentMethodProps {
  methodPayment: METHOD_PAYMENT
  setMethodPayment: (method: METHOD_PAYMENT) => void
}

const methodsPayment: IMethodDescriptionSelect[] = [
  {
    id: 1,
    title: 'Pix',
    description:
      'O pagamento via Pix é rápido e seguro. Após a confirmação do pedido, você receberá um código QR ou chave Pix para efetuar o pagamento diretamente do seu aplicativo bancário. A compensação é instantânea, permitindo que seu pedido seja processado imediatamente.',
    icon: <QrCode />,
    isSelected: false,
    method: METHOD_PAYMENT.PIX,
  },
  {
    id: 2,
    title: 'Cartão de Crédito',
    description:
      'Pague com seu cartão de crédito. Aceitamos as principais bandeiras e você pode parcelar em até 12 vezes.',
    icon: <CreditCard />,
    isSelected: false,
    method: METHOD_PAYMENT.CREDIT_CARD,
  },
  {
    id: 3,
    title: 'Boleto Bancário',
    description:
      'O boleto bancário pode levar até 2 dias úteis para compensar. Após o pagamento, seu pedido será liberado automaticamente.',
    icon: <Barcode />,
    isSelected: false,
    method: METHOD_PAYMENT.PAYMENT_SLIP,
  },
]

const PaymentMethod = ({ methodPayment, setMethodPayment }: IPaymentMethodProps) => {
  const handleSelect = (paymenteMethod: METHOD_PAYMENT) => {
    setMethodPayment(paymenteMethod)
  }

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <Accordion
        type="single"
        collapsible
        value={
          methodsPayment.find((m) => m.method === methodPayment)?.id
            ? String(methodsPayment.find((m) => m.method === methodPayment)!.id)
            : undefined
        }
        onValueChange={(v) => {
          const method = methodsPayment.find((m) => String(m.id) === v)
          if (method) setMethodPayment(method.method)
        }}
      >
        {methodsPayment.map((method) => (
          <AccordionItem
            key={method.id}
            value={String(method.id)}
            className="  border-transparent rounded-lg overflow-hidden mb-4"
          >
            <AccordionTrigger className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={methodPayment === method.method}
                  onChange={() => handleSelect(method.method)}
                  className="checkbox-custom"
                  style={{
                    background: 'var(--checkbox-bg)',
                    border: '2px solid var(--checkbox-border)',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    accentColor: 'var(--primary)',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s',
                  }}
                />
                {method.icon}
                <span className="font-semibold">{method.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              <div className="p-4 pt-3 border-t ">
                <p className="p-4 pt-3">{method.description}</p>
                <div>
                  {method.method === METHOD_PAYMENT.CREDIT_CARD && (
                    <>
                      <CardForm />
                    </>
                  )}{' '}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}

export { PaymentMethod }
