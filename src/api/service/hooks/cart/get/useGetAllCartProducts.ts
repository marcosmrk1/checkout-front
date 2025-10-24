import { useEffect, useState } from 'react'
import { getCart } from '@/utils/localStorage/Cart'
import { IResponse } from '@/@interface/response/response'
import { ICart } from '@/@interface/api/ICart'
import { ROUTE_CART } from '@/api/service/routes/Cart'
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function useGetAllCartProducts() {
  const [response, setResponse] = useState<IResponse<ICart>>({} as IResponse<ICart>)

  useEffect(() => {
    const fetchCart = async () => {
      setResponse((prev) => ({ ...prev, loading: true }))
      try {
        await wait(300)
        await fetch(ROUTE_CART).catch(() => {})
        const cartData = getCart()
        setResponse({
          data: cartData,
          success: true,
          message: 'Produtos do carrinho obtidos com sucesso.',
          errors: [],
          loading: false,
          statusCode: 200,
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        setResponse({
          data: null,
          success: false,
          message: 'Erro ao obter produtos do carrinho.',
          errors: [String(error)],
          loading: false,
          statusCode: 500,
          timestamp: new Date().toISOString(),
        })
      }
    }
    fetchCart()
  }, [])

  return response
}
