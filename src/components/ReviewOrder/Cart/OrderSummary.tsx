'use client'

import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { Card } from '@/components/ui/card'

const OrderSummary = ({ refresh }: { refresh: number }) => {
  const { data, loading } = useGetAllCartProducts(refresh)
  const total = data?.total ?? 0
  const itemsCount = data?.itens?.reduce((acc, item) => acc + item.quantity, 0) ?? 0
  if (loading) return <GenericLoading />
  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent sticky top-4">
      <h3 className="font-bold text-lg mb-4">Resumo do Pedido</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-2xl text-primary">R$ {total.toFixed(2)}</span>
        </div>
        <div className="text-xs">
          <p>
            • {itemsCount} {itemsCount === 1 ? 'item' : 'itens'} no carrinho
          </p>
        </div>
      </div>
    </Card>
  )
}

export { OrderSummary }
