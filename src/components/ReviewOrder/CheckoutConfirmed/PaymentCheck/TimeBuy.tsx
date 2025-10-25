'use client'

import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { usePatchOrderReviewCart } from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import OrderExpired from '@/components/ReviewOrder/statusFinalOrder/expired'
interface TimeBuyProps {
  setRefresh: React.Dispatch<React.SetStateAction<number>>
  setExpired: React.Dispatch<React.SetStateAction<boolean>>
}
const TimeBuy = ({ setRefresh, setExpired }: TimeBuyProps) => {
  const [timeLeft, setTimeLeft] = useState(1 * 1)
  const [localExpired, setLocalExpired] = useState(false)

  useEffect(() => {
    if (timeLeft <= 0) {
      if (!localExpired) {
        usePatchOrderReviewCart(ORDER_REVIEW.EXPIRED_ORDER)
        setLocalExpired(true)
        setExpired(true)
      }
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, localExpired, setExpired])
  // Não renderiza OrderExpired aqui, pois o pai já faz isso

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Card className="w-full rounded-md p-1 items-center bg-card  border-transparent">
      <h2 className="text-xl font-semibold text-center ">
        Tempo restante para finalizar a compra
        <div className="text-4xl font-bold text-red-500">
          {timeLeft > 0 ? formatTime(timeLeft) : '00:00'}
        </div>
      </h2>
      {timeLeft === 0 && <p className="text-sm text-red-500 mt-2">Tempo expirado!</p>}
    </Card>
  )
}
export { TimeBuy }
