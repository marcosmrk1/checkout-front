import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { usePatchOrderReviewCart } from '@/api/service/hooks/cart/patch/usePatchOrderReview'

const PaymenteCreditCard = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleConfirm = () => {
    setLoading(true)
    // const { success: confirmSuccess } = usePatchOrderReviewCart(
    //   ORDER_REVIEW.CONFIRM_ORDER,
    // )
    // setTimeout(() => {
    //   setLoading(false)
    //   setSuccess(confirmSuccess)
    // }, 800)
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
        {!success ? (
          <Button
            onClick={handleConfirm}
            disabled={loading}
            className="w-full max-w-xs text-lg"
          >
            {loading ? 'Confirmando...' : 'Confirmar Cartão'}
          </Button>
        ) : (
          <span className="text-green-600 font-bold text-lg mt-2">
            Cartão confirmado com sucesso!
          </span>
        )}
      </div>
    </Card>
  )
}
export { PaymenteCreditCard }
