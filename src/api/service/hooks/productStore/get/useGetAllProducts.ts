import { useEffect, useState } from 'react'
import { ROUTE_PRODUCT_API } from '@/api/service/routes/productStore'
import { LOCAL_STORAGE_PRODUCTS } from '@/utils/localStorage/Products'
import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'

// Mock dos produtos
export const product: IProduct[] = [
  {
    id: 1,
    name: 'controle Xbox',
    price: 250,
    description: 'controle sem fio Xbox',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png',
    category: 'dispositivo de jogo',
    star: 4,
  },
  {
    id: 2,
    name: 'Headset Gamer',
    price: 300,
    description: 'Headset com som surround 7.1',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png',
    category: 'acessório gamer',
    star: 5,
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 450,
    description: 'Teclado mecânico RGB para jogos',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png',
    category: 'acessório gamer',
    star: 4,
  },
  {
    id: 4,
    name: 'Mouse Gamer',
    price: 200,
    description: 'Mouse gamer com alta precisão',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png',
    category: 'acessório gamer',
    star: 5,
  },
  {
    id: 5,
    name: 'Monitor 27 polegadas',
    price: 1200,
    description: 'Monitor Full HD para jogos',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png',
    category: 'dispositivo de jogo',
    star: 4,
  },
]

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function useGetAllProducts() {
  const [response, setResponse] = useState<IResponse<IProduct[]>>(
    {} as IResponse<IProduct[]>,
  )

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await wait(300)
        await fetch(ROUTE_PRODUCT_API).catch(() => {})
        localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify(product))
        const storedProducts = localStorage.getItem(LOCAL_STORAGE_PRODUCTS)
        const products: IProduct[] = storedProducts ? JSON.parse(storedProducts) : []
        setResponse({
          data: products,
          success: true,
          message: 'Produtos obtidos com sucesso.',
          errors: [],
          loading: false,
          statusCode: 200,
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        setResponse({
          data: [],
          success: false,
          message: 'Erro ao buscar produtos.',
          errors: [String(error)],
          loading: false,
          statusCode: 500,
          timestamp: new Date().toISOString(),
        })
      }
    }
    fetchProducts()
  }, [])

  return response
}
