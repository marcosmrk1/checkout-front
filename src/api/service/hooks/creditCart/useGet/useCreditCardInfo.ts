import { useState, useEffect } from 'react'
import { getCreditCardInfo } from '@/utils/localStorage/CreditCard'
import { ICreditCard } from '@/@interface/api/ICardCredit'

export function useCreditCardInfo() {
  const [data, setData] = useState<ICreditCard | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const card = getCreditCardInfo()
      setData(card)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error }
}
