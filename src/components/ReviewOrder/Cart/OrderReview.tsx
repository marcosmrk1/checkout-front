'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { GenericLoading } from '@/components/Generic/Loading'
import { IProduct } from '@/@interface/api/IProduct'
import useGetAllCartProducts from '@/api/hooks/cart/get/useGetAllCartProducts'
import usePatchQuantity from '@/api/hooks/cart/patch/usePatchQuantity'
import useDeleteItemCart from '@/api/hooks/cart/del/useDeleteItemCart'
import { priceFormatedBRL } from '@/utils/function/priceFormated'
interface product {
  id: number
  name: string
  quantity: number
  price: number
  img: string
}

const OrderReview = ({}: {}) => {
  const { data, loading, errors } = useGetAllCartProducts()
  const { handleAddQuantity, handleRemoveQuantity } = usePatchQuantity()
  const { deleteItemCart } = useDeleteItemCart()
  if (loading) return <GenericLoading />

  if (!data || !data.itens || data.itens.length === 0) {
    return (
      <Card className="w-full rounded-md p-4 bg-card border-transparent">
        <div className="gap-4 flex items-center ">
          <ShoppingCart /> <span className="font-bold">Produtos</span>
        </div>
        <div className="mt-4 w-full text-center text-muted-foreground">
          Nenhum produto no carrinho.
        </div>
      </Card>
    )
  }

  const updateProductQuantity = (productSelect: IProduct, add: boolean) => {
    const action = add ? handleAddQuantity : handleRemoveQuantity
    action(productSelect)
  }

  const handleDeleteProduct = (productSelect: IProduct) => {
    deleteItemCart(productSelect.id)
  }

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <div className="gap-4 flex items-center ">
        <ShoppingCart /> <span className="font-bold">Produtos</span>
      </div>
      <div className="mt-4 w-full max-h-96 overflow-y-auto ">
        {data.itens.map((item) => (
          <div key={item.product.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10  cursor-pointer"
                onClick={() => handleDeleteProduct(item.product)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-contain rounded bg-muted"
              />
              <div>
                <p className="font-medium">{item.product.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-foreground">Quantidade:</span>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6  cursor-pointer"
                      onClick={() => updateProductQuantity(item.product, false)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 cursor-pointer"
                      onClick={() => updateProductQuantity(item.product, true)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-semibold">
              {priceFormatedBRL(item.product.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t my-2 flex justify-between pt-4">
        <span className="font-semibold">Total:</span>
        <span className="font-bold">{priceFormatedBRL(data.total)}</span>
      </div>
    </Card>
  )
}
export { OrderReview }
