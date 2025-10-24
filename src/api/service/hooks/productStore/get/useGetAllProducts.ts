import { useEffect, useState } from 'react'
import { IProductStore } from '@/@interface/api/IProductStore'
import { ROUTE_PRODUCT_API } from '@/api/service/routes/productStore'

// Mock dos produtos
const product: IProductStore[] = [
  {
    id: 1,
    name: 'controle Xbox',
    price: 250,
    description: 'controle sem fio Xbox',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png', // Mouse sem fundo
    category: 'dispositivo de jogo',
    star: 4,
  },
  {
    id: 2,
    name: 'Headset Gamer',
    price: 300,
    description: 'Headset com som surround 7.1',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png', // Mouse sem fundo
    category: 'acessório gamer',
    star: 5,
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 450,
    description: 'Teclado mecânico RGB para jogos',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png', // Mouse sem fundo
    category: 'acessório gamer',
    star: 4,
  },
  {
    id: 4,
    name: 'Mouse Gamer',
    price: 200,
    description: 'Mouse gamer com alta precisão',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png', // Mouse sem fundo
    category: 'acessório gamer',
    star: 5,
  },
  {
    id: 5,
    name: 'Monitor 27 polegadas',
    price: 1200,
    description: 'Monitor Full HD para jogos',
    image: 'https://pngimg.com/d/computer_mouse_PNG7682.png', // Mouse sem fundo
    category: 'dispositivo de jogo',
    star: 4,
  },
]

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function useGetAllProducts() {
  const [data, setData] = useState<IProductStore[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        await fetch(ROUTE_PRODUCT_API).catch(() => {})
        await wait(500)
        setData(product)
      } catch (err: any) {
        setError('Erro ao buscar produtos.')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return { data, loading, error }
}
