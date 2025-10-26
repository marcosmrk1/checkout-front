import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'
import { LOCAL_STORAGE_PRODUCTS } from '@/utils/localStorage/Products'

// Mock dos produtos
export const product: IProduct[] = [
  {
    id: 1,
    name: 'controle Xbox',
    price: 250,
    description: 'controle sem fio Xbox',
    image: '/images/controle-xbox.jpg',
    star: 4,
    category: 'Acessórios',
  },
  {
    id: 2,
    name: 'Headset Gamer',
    price: 300,
    description: 'Headset com som surround 7.1',
    image: '/images/headset-gamer.jpg',
    star: 5,
    category: 'Acessórios',
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 450,
    description: 'Teclado mecânico RGB para jogos',
    image: '/images/teclado-mecanico.jpg',
    star: 5,
    category: 'Periféricos',
  },
  {
    id: 4,
    name: 'Mouse Gamer',
    price: 200,
    description: 'Mouse gamer com alta precisão',
    image: '/images/mouse-gamer.jpg',
    star: 4,
    category: 'Periféricos',
  },
  {
    id: 5,
    name: 'Monitor 27 polegadas',
    price: 1200,
    description: 'Monitor Full HD para jogos',
    image: '/images/monitor-27.jpg',
    star: 5,
    category: 'Monitores',
  },
]

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const getAllProducts = async (): Promise<IResponse<IProduct[]>> => {
  await wait(1000)
  try {
    const localStorageProducts = localStorage.getItem(LOCAL_STORAGE_PRODUCTS)
    if (localStorageProducts) {
      const products: IProduct[] = JSON.parse(localStorageProducts)
      return {
        data: products,
        loading: false,
        success: true,
        message: 'Produtos carregados do localStorage.',
        statusCode: 200,
        timestamp: new Date().toISOString(),
        errors: [],
      }
    } else {
      localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify(product))
      return {
        data: product,
        loading: false,
        success: true,
        message: 'Produtos mockados carregados e salvos no localStorage.',
        statusCode: 200,
        timestamp: new Date().toISOString(),
        errors: [],
      }
    }
  } catch (error: any) {
    return {
      data: null,
      loading: false,
      success: false,
      message: 'Erro ao carregar produtos.',
      statusCode: 500,
      timestamp: new Date().toISOString(),
      errors: [error.message],
    }
  }
}
