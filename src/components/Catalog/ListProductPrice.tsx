import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { defaultStyleButton } from '@/lib/constantsStyleDefault/Button'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'

const ListProductPrice = () => {
  return (
    <Card className="w-72 rounded-lg p-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card border-2 border-transparent hover:border-primary/20">
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

      <div className="mb-4   rounded-lg p-4 relative overflow-hidden group">
        <div className="absolute inset-0 from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src="/image/product/10022356.png"
          alt="Product Image"
          className="w-full h-39 object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
        </div>

        <h3 className="font-semibold text-lg line-clamp-2 hover:text-primary transition-colors">
          Xbox Matt One Controller
        </h3>

        <p className="text-sm text-muted-foreground flex items-center gap-1">
          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium">
            Gaming Devices
          </span>
        </p>

        <div className="group/price relative flex h-12 items-center pt-2">
          <div className="flex items-center gap-4 transition-opacity duration-300 group-hover/price:opacity-0">
            <span className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              R$ 250,00
            </span>
            <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
              Em estoque
            </span>
          </div>

          <div className="absolute inset-0 flex w-full items-center gap-2 opacity-0 transition-all duration-300 group-hover/price:opacity-100">
            <div className="flex gap-2 w-full">
              <Button
                className={`${defaultStyleButton} px-4 flex-1 shadow-md hover:shadow-lg transition-shadow`}
              >
                <span className="font-semibold">Comprar R$ 250,00</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border/50">
          <span>🚚 Frete grátis</span>
          <span>⚡ Entrega rápida</span>
        </div>
      </div>
    </Card>
  )
}
export { ListProductPrice }
