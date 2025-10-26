import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'
import { LOCAL_STORAGE_PRODUCTS } from '@/utils/localStorage/Products'

// Mock dos produtos
export const product: IProduct[] = [
  // ... seus produtos mockados ...
]

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const getAllProducts = async (): Promise<IResponse<IProduct[]>> => {
  await wait(1000) // Simula um atraso de 1 segundo
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
      // Simula uma chamada de API bem-sucedida e armazena no localStorage
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
