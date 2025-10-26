'use client'

import { METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Check } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  URL_PROGRESS_ORDER,
  URL_KART_STEP,
  URL_PAYMENT_STEP,
  URL_CONFIRMED_STEP,
} from '@/@URLQueries/progressOrderStep'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { usePatchOrderReviewCart } from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import { useEffect, useState } from 'react'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { usePatchMethodPayment } from '@/api/service/hooks/cart/patch/usePatchMethodPayment'
import { CREDIT_CARD_STORAGE_KEY } from '@/utils/localStorage/CreditCard'

interface ButtonProps {
  backLabel?: string
  setRefresh?: (value: number) => void
  methodPayment?: METHOD_PAYMENT
}

const NextStepButtons = ({
  backLabel = 'Voltar ao cátalogo',
  methodPayment,
}: ButtonProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const progressOrder = searchParams.get(URL_PROGRESS_ORDER)
  const clearCart = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('checkout:cart')
    }
  }

  const handleLeaveConfirmedStep = () => {
    if (window.confirm('Se você sair agora, cancelará seu pedido. Deseja continuar?')) {
      clearCart()
      router.push('/catalog')
    }
  }

  const handleBackToPayment = () => {
    if (progressOrder === URL_KART_STEP) {
      router.push(`/catalog`)
    }
    if (progressOrder === URL_PAYMENT_STEP) {
      router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_KART_STEP}`)
    }
  }

  useEffect(() => {
    if (progressOrder === URL_CONFIRMED_STEP) {
      handleLeaveConfirmedStep()
    }
  }, [progressOrder])

  const confirmeOrder = async () => {
    if (methodPayment === METHOD_PAYMENT.CREDIT_CARD) {
      const getCatchCardCreditUser = localStorage.getItem(CREDIT_CARD_STORAGE_KEY)
      const cardCreditUser = getCatchCardCreditUser
        ? JSON.parse(getCatchCardCreditUser)
        : null
      console.log(cardCreditUser.last4Number)
      if (cardCreditUser?.last4Number) {
        ShowGenericToast({
          type: 'success',
          message: 'Método de pagamento salvo com sucesso!',
        })
        return router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_CONFIRMED_STEP}`)
      } else {
        ShowGenericToast({
          type: 'error',
          message:
            'Por favor, preencha os dados do cartão de crédito antes de continuar.',
        })
        return
      }
    }
    if (!methodPayment) {
      ShowGenericToast({
        type: 'error',
        message: 'Selecione um método de pagamento para continuar.',
      })
    }

    if (methodPayment && progressOrder === URL_PAYMENT_STEP) {
      const responseMethodPayment = await usePatchMethodPayment(methodPayment)
      if (responseMethodPayment.loading) return <GenericLoading />
      if (responseMethodPayment.success) {
        router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_CONFIRMED_STEP}`)
      }
    }
  }

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <div className="flex   gap-3 w-full ">
        <Button
          onClick={handleBackToPayment}
          variant="outline"
          className="w-1/2"
          size="lg"
        >
          <ArrowLeft className="h-5 w-4 mr-2" />
          {backLabel}
        </Button>
        <Button onClick={confirmeOrder} className="w-1/2" size="lg">
          <Check className="h-5 w-4 mr-2" />
          Confirmar Pedido
        </Button>
      </div>
    </Card>
  )
}

export { NextStepButtons }
