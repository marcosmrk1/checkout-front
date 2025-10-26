'use client'
import { IProduct } from '@/@interface/api/IProduct'

import { GenericLoading } from '@/components/Generic/Loading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { useEffect } from 'react'
import { useProductStore } from '@/store/productStore'
import useGetAllProductStore from '@/api/service/hooks/products/useGet/useGetAllProductStore'
import { useCartStoreReview } from '@/store/cartStore'

const ListProductPrice = () => {
  const addProduct = useCartStoreReview((state) => state.addProduct)
  const { data, success, message, loading } = useGetAllProductStore()

  if (!success) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-red-500">
        <span>Erro ao carregar produtos.</span>
        <span>{success}</span>
      </div>
    )
  }
  if (loading) return <GenericLoading />
  const handleAddToCart = (product: IProduct) => {
    addProduct(product)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {data?.map((product) => (
          <Card
            key={product.id}
            className="w-72 rounded-lg p-2 shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-2 border-transparent hover:shadow-[0_0_20px_rgba(57,255,20,0.6),0_0_40px_rgba(57,255,20,0.3)]"
          >
            <div className="flex justify-end items-center mb-2">
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full hover:bg-pink-100 hover:text-pink-500 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full hover:bg-pink-100 hover:text-pink-500 transition-colors"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-4 rounded-lg p-4 relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-39 object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(product.star)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({product.star}.0)
                </span>
              </div>

              <h3 className="font-semibold text-lg line-clamp-2 hover:text-primary transition-colors">
                {product.name}
              </h3>

              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium">
                  {product.category}
                </span>
              </p>

              <div className="group/price relative flex h-12 items-center pt-2">
                <div className="flex items-center gap-4 transition-opacity duration-300 group-hover/price:opacity-0">
                  <span className="text-2xl font-bold  from-primary to-primary/80 bg-clip-text  ">
                    R$ {product.price},00
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                    Em estoque
                  </span>
                </div>

                <div className="absolute inset-0 flex w-full items-center gap-2 opacity-0 transition-all duration-300 group-hover/price:opacity-100">
                  <div className="flex gap-2 w-full">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className={`${defaultStyleButton} px-4 flex-1 shadow-md hover:shadow-lg transition-shadow`}
                    >
                      <span className="font-semibold">
                        Comprar R$ {product.price},00
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs   ">
                <span>🚚 Frete grátis</span>
                <span>⚡ Entrega rápida</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

export { ListProductPrice }
