'use client'
import { URL_KART_STEP, URL_PROGRESS_ORDER } from '@/@URLQueries/progressOrderStep'
import useGetAllCartProducts from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenuItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CartItemsList = () => {
  const { data, loading } = useGetAllCartProducts()
  const router = useRouter()
  if (loading) {
    return <GenericLoading />
  }
  const redirectReviewOrder = () => {
    const productInCart = data?.itens?.length === 0
    if (productInCart) {
      ShowGenericToast({ message: 'Seu carrinho está vazio.', type: 'error' })
      return
    }
    return router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_KART_STEP}`)
  }
  return (
    <>
      <div className="max-h-[300px] overflow-y-auto">
        {data?.itens?.map((item: any) => (
          <DropdownMenuItem key={item.product.id} className="flex items-start gap-3 p-3">
            <div className="h-16 w-16 rounded bg-muted flex items-center justify-center overflow-hidden">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{item.product.name}</p>
              <p className="text-xs ">Quantidade: {item.quantity}</p>
              <p className="text-sm font-semibold mt-1">
                R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
              </p>
            </div>
          </DropdownMenuItem>
        ))}
        {(!data || data.itens.length === 0) && (
          <div className="p-3 text-center text-sm text-muted-foreground">
            Seu carrinho está vazio.
          </div>
        )}
      </div>

      <DropdownMenuSeparator />

      <div className="p-3">
        <div className="flex justify-between mb-3">
          <span className="font-semibold">Total:</span>
          <span className="font-bold">
            R$ {data?.total?.toFixed(2).replace('.', ',') || '0,00'}
          </span>
        </div>
        <Button className="w-full" onClick={redirectReviewOrder}>
          <span className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Finalizar Compra
          </span>
        </Button>
      </div>
    </>
  )
}
export { CartItemsList }
