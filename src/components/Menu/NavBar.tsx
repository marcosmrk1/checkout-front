'use client'

import { ShoppingCart, User, Package, LogOut, Settings } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { CartItemsList } from '@/components/Menu/CartItemsList'
import { signOut } from 'next-auth/react'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { useCartStore } from '@/store/cartStore'

const NavBarHeader = () => {
  const cart = useCartStore((state) => state.cart)
  const quantityItemsInCart = cart?.totalQuantity
  console.log('cart', quantityItemsInCart)
  return (
    <div className="flex h-16 items-center justify-between px-4 bg-sidebar">
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-2xl font-bold text-sidebar-foreground">
          Sua Empresa
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-sidebar-primary"
        >
          Home
        </Link>
        <Link
          href="/produtos"
          className="text-sm font-medium transition-colors hover:text-sidebar-primary"
        >
          Produtos
        </Link>
        <Link
          href="/categorias"
          className="text-sm font-medium transition-colors hover:text-sidebar-primary"
        >
          Categorias
        </Link>
      </nav>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {quantityItemsInCart > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {quantityItemsInCart}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Carrinho de Compras</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {quantityItemsInCart === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Seu carrinho está vazio
              </div>
            ) : (
              <CartItemsList />
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">João Silva</p>
                <p className="text-xs leading-none text-muted-foreground">
                  joao@email.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/pedidos" className="cursor-pointer">
                <Package className="mr-2 h-4 w-4" />
                <span>Meus Pedidos</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/configuracoes" className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive cursor-pointer"
              onClick={() => signOut({ redirect: true, callbackUrl: '/login' })}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
export { NavBarHeader }
