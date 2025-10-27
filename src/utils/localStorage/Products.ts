import { IProduct } from '@/@interface/api/IProduct'

export const LOCAL_STORAGE_product = 'checkout:product'

const initialproduct: IProduct[] = [
  {
    id: 1,
    name: 'controle Xbox',
    price: 250,
    description: 'controle sem fio Xbox',
    image: '/images/product/xbox.png',
    star: 4,
    category: 'Acessórios',
  },
  {
    id: 2,
    name: 'Headset Gamer',
    price: 300,
    description: 'Headset com som surround 7.1',
    image: '/images/product/headset.jpg',
    star: 5,
    category: 'Acessórios',
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 450,
    description: 'Teclado mecânico RGB para jogos',
    image: '/images/product/teclado.jpg',
    star: 5,
    category: 'Periféricos',
  },
  {
    id: 4,
    name: 'Mouse Gamer',
    price: 200,
    description: 'Mouse gamer com alta precisão',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrX5jj3gZSGVrdFDmm5hKjNPEuboxRlbbHg&s',
    star: 4,
    category: 'Periféricos',
  },
]

export function getProduct(): IProduct[] {
  if (typeof window === 'undefined') return initialproduct
  const product = localStorage.getItem(LOCAL_STORAGE_product)
  if (!product) {
    localStorage.setItem(LOCAL_STORAGE_product, JSON.stringify(initialproduct))
    return initialproduct
  }
  try {
    const parsed = JSON.parse(product)
    if (Array.isArray(parsed)) {
      return parsed
    }
    localStorage.removeItem(LOCAL_STORAGE_product)
    return initialproduct
  } catch {
    localStorage.removeItem(LOCAL_STORAGE_product)
    return initialproduct
  }
}
