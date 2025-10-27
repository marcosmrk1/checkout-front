import { IProduct } from '@/@interface/api/IProduct'
import { IResponse } from '@/@interface/response/Iresponse'
import { getProduct } from '@/utils/localStorage/Products'

export const getAllProducts = async (): Promise<IResponse<IProduct[]>> => {
  await new Promise((r) => setTimeout(r, 500))
  const data = getProduct()
  return {
    data,
    loading: false,
    success: true,
    message: 'Produtos carregados do localStorage',
    statusCode: 200,
    timestamp: new Date().toISOString(),
    errors: [],
  }
}
