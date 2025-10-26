import { ICart } from '@/@interface/api/ICart'
import { IResponse } from '@/@interface/response/Iresponse'
import { getCart } from '@/utils/localStorage/Cart'

export const getAllProductCart = async (): Promise<IResponse<ICart>> => {
  await new Promise((r) => setTimeout(r, 500))
  const data = getCart()
  return {
    data,
    loading: false,
    success: true,
    message: 'Carrinho carregado do localStorage',
    statusCode: 200,
    timestamp: new Date().toISOString(),
    errors: [],
  }
}
