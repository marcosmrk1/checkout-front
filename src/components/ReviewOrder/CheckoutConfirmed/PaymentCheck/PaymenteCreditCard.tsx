import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import usePatchOrderReview from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import useGetAllProductStore from '@/api/service/hooks/products/useGet/useGetAllProductStore'
import { GenericLoading } from '@/components/Generic/Loading'
import useGetAllCartProducts from '@/api/service/hooks/cart/get/useGetAllCartProducts'

interface PaymenteCreditCardProps {
  setRefresh: React.Dispatch<React.SetStateAction<number>>
}

const PaymenteCreditCard = ({ setRefresh }: PaymenteCreditCardProps) => {
  const { handlePatchOrderReview, success, loading } = usePatchOrderReview()
  const { data, loading: loadingProductsCard } = useGetAllCartProducts()

  console.log('success', success)
  const handleConfirm = async () => {
    await handlePatchOrderReview(ORDER_REVIEW.CONFIRMED_ORDER)
  }

  if (loadingProductsCard) return <GenericLoading />
  const showButtonFormation = () => {
    if (loadingProductsCard) return <GenericLoading />

    if (data?.orderReview === ORDER_REVIEW.WAIT_CONFIRM) {
      return (
        <Card className="w-full max-w-lg mx-auto rounded-md p-6 items-center bg-card border-transparent shadow-lg mt-10">
          <h2 className="text-xl font-semibold text-center mb-2">
            Confirmação do Cartão de Crédito
          </h2>
          <p className="text-center text-base mb-4 ">
            Recebemos o seu pedido, confirme o pagamento com cartão de crédito para
            finalizar a compra.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button onClick={handleConfirm} disabled={loading}>
              {loading ? 'Confirmando...' : 'Confirmar Cartão'}
            </Button>
          </div>
        </Card>
      )
    }

    if (data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER) {
      return (
        <Card className="w-full max-w-lg mx-auto rounded-md p-6 items-center bg-card border-transparent shadow-lg mt-10">
          <h2 className="text-xl font-semibold text-center mb-2">
            Pagamento confirmado!
          </h2>
          <p className="text-center text-base mb-4 text-green-600 font-bold">
            Seu pedido foi confirmado com sucesso no cartão de crédito.
          </p>
        </Card>
      )
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto rounded-md p-6 items-center bg-card border-transparent shadow-lg mt-10">
      <h2 className="text-xl font-semibold text-center mb-2">
        Confirmação do Cartão de Crédito
      </h2>
      <p className="text-center text-base mb-4 ">
        Recebemos o seu pedido, confirme o pagamento com cartão de crédito para finalizar
        a compra.
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        {showButtonFormation()}
      </div>
    </Card>
  )
}

export { PaymenteCreditCard }
