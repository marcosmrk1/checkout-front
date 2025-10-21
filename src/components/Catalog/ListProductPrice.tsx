import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { defaultStyleButton } from '@/lib/constantsStyleDefault/Button'
import { Heart, ShoppingCart } from 'lucide-react'

const ListProductPrice = () => {
  return (
    <Card className="w-72 rounded-lg  p-2 shadow-xs  ">
      <div className="flex justify-between ">
        <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          - 50%
        </span>
        <Heart className="text-muted-foreground hover:text-pink-500 cursor-pointer" />
      </div>
      <div className="mb-4">
        <img
          src="/image/product/10022356.png"
          alt="Product Image"
          className="w-full h-39 object-contain"
        />
      </div>
      <div className="flex flex-col space-y-2 ">
        <h3 className="font-semibold text-lg ">Xbox Matt One Controller</h3>
        <p className="text-sm  d">Gaming Devices</p>
        {/* Container para o efeito hover */}
        <div className="group relative flex h-10 items-center pt-2">
          {/* Preços originais - visíveis por padrão */}
          <div className="flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-0">
            <span className="text-2xl font-bold text-foreground">R$ 250,00</span>
          </div>

          <div className="absolute inset-0 flex w-full items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex gap-5">
              <Button className={`${defaultStyleButton} px-3`}>
                <span>Comprar R$ 250,00</span>
              </Button>
              <Button size="icon" className="rounded-full bg-[#1c5e5c] px-3 ">
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
export { ListProductPrice }
