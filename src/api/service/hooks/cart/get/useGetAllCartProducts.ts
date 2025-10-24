import { useEffect, useState } from 'react'
import { getCart } from '@/utils/localStorage/Cart'
import { IResponse } from '@/@interface/response/response'
import { get } from 'http'
import { ICart } from '@/@interface/api/ICart'

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function useGetAllCartProducts(): IResponse<ICart> {
  let loading = true
  try {
    wait(500)
    loading = false
    const cardData = getCart()
    return {
      data: cardData,
      success: true,
      message: 'Produtos do carrinho obtidos com sucesso.',
      errors: [],
      loading,
      statusCode: 200,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      data: null,
      success: false,
      message: 'Erro ao obter produtos do carrinho.',
      errors: [String(error)],
      loading,
      statusCode: 500,
      timestamp: new Date().toISOString(),
    }
  }
}
