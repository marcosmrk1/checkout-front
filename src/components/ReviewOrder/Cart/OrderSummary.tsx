'use client'

import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface OrderSummaryData {
  subtotal: number
  shippingCost: number
  discount: number
  total: number
  itemsCount: number
}

const mockOrderSummary: OrderSummaryData[] = [
  {
    subtotal: 499.7,
    shippingCost: 15.9,
    discount: 10.0,
    total: 505.6,
    itemsCount: 3,
  },
]

const OrderSummary = () => {
  const orderData = mockOrderSummary[0]

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent sticky top-4">
      <h3 className="font-bold text-lg mb-4">Resumo do Pedido</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="font-medium">R$ {orderData.subtotal.toFixed(2)}</span>
        </div>

        {orderData.shippingCost > 0 && (
          <div className="flex justify-between text-sm">
            <span>Frete</span>
            <span className="font-medium">R$ {orderData.shippingCost.toFixed(2)}</span>
          </div>
        )}

        {orderData.discount > 0 && (
          <div className="flex justify-between text-sm">
            <span>Desconto</span>
            <span className="font-medium">-R$ {orderData.discount.toFixed(2)}</span>
          </div>
        )}

        <Separator className="my-1" />

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-2xl text-primary">
            R$ {orderData.total.toFixed(2)}
          </span>
        </div>
        <div className="text-xs">
          <p>
            • {orderData.itemsCount} {orderData.itemsCount === 1 ? 'item' : 'itens'} no
            carrinho
          </p>
        </div>
      </div>
    </Card>
  )
}

export { OrderSummary }
