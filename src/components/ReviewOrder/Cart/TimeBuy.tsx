'use client'

import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'

const TimeBuy = () => {
  const [timeLeft, setTimeLeft] = useState(1 * 60)

  useEffect(() => {
    if (timeLeft <= 0) return

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
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Card className="w-full rounded-md p-1 items-center bg-card  border-transparent">
      <h2 className="text-xl font-semibold text-center ">
        Tempo restante para finalizar a compra
        <div className="text-4xl font-bold text-primary">
          {timeLeft > 0 ? formatTime(timeLeft) : '00:00'}
        </div>
      </h2>
      {timeLeft === 0 && <p className="text-sm text-red-500 mt-2">Tempo expirado!</p>}
    </Card>
  )
}
export { TimeBuy }
