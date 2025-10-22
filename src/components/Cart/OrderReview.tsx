'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
interface product {
  id: number
  name: string
  quantity: number
  price: number
  img: string
}
const initialProducts: product[] = [
  {
    id: 1,
    name: 'Nome do Produto',
    quantity: 1,
    price: 99.9,
    img: '/image/product/10022356.png',
  },
  {
    id: 2,
    name: 'Outro Produto',
    quantity: 2,
    price: 149.9,
    img: '/image/product/10022356.png',
  },
  {
    id: 3,
    name: 'Terceiro Produto',
    quantity: 1,
    price: 249.9,
    img: '/image/product/10022356.png',
  },
]

const OrderReview = () => {
  const [products, setProducts] = useState(initialProducts)

  const updateProductQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((item: product) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta
          return {
            ...item,
            quantity: newQuantity,
          }
        }
        return item
      }),
    )
  }
  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <div className="gap-4 flex items-center">
        <ShoppingCart /> <span>Produtos</span>
      </div>
      <div className="mt-4 w-full max-h-96 overflow-y-auto">
        {products.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleDeleteProduct(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-contain rounded bg-muted"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-foreground">Quantidade:</span>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6"
                      onClick={() => updateProductQuantity(item.id, -1)}
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
                      className="h-6 w-6"
                      onClick={() => updateProductQuantity(item.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 mt-4 flex justify-between">
        <span className="font-semibold">Total:</span>
        <span className="font-bold">
          R${' '}
          {products
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
    </Card>
  )
}
export { OrderReview }
