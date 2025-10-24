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
import {
  IMethodDescriptionSelect,
  IMethodsPayment,
} from '@/@interface/models/IMethodsPayment'
import { Card } from '@/components/ui/card'
import { CardForm } from '@/components/ReviewOrder/PaymentMethod/Form/Card'

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
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <Accordion
        type="single"
        collapsible
        value={selectedIndex ? String(selectedIndex) : undefined}
        onValueChange={(v) => setSelectedIndex(v ? Number(v) : null)}
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
                  checked={selectedIndex === method.id}
                  onChange={() => handleSelect(method.id)}
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
                  {method.method === IMethodsPayment.CreditCard && (
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
