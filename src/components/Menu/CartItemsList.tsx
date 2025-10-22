import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenuItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const CartItemsList = () => {
  return (
    <>
      <div className="max-h-[300px] overflow-y-auto">
        <DropdownMenuItem className="flex items-start gap-3 p-3">
          <div className="h-16 w-16 rounded bg-muted  "></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Nome do Produto</p>
            <p className="text-xs text-muted-foreground">Quantidade: 1</p>
            <p className="text-sm font-semibold mt-1">R$ 99,90</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-start gap-3 p-3">
          <div className="h-16 w-16 rounded bg-muted "></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Outro Produto</p>
            <p className="text-xs text-muted-foreground">Quantidade: 2</p>
            <p className="text-sm font-semibold mt-1">R$ 149,90</p>
          </div>
        </DropdownMenuItem>
      </div>

      <DropdownMenuSeparator />

      <div className="p-3">
        <div className="flex justify-between mb-3">
          <span className="font-semibold">Total:</span>
          <span className="font-bold">R$ 299,70</span>
        </div>
        <Button className="w-full" asChild>
          <Link href="/checkout" className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Finalizar Compra
          </Link>
        </Button>
      </div>
    </>
  )
}
export { CartItemsList }
