import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import usePatchOrderReview from '@/api/hooks/cart/patch/usePatchOrderReview'
import { GenericLoading } from '@/components/Generic/Loading'
import useGetAllCartProducts from '@/api/hooks/cart/get/useGetAllCartProducts'

const PaymenteCreditCard = () => {
  const { handlePatchOrderReview, success, loading } = usePatchOrderReview()
  const { data, loading: loadingProductsCard } = useGetAllCartProducts()

  const handleConfirm = async () => {
    await handlePatchOrderReview(ORDER_REVIEW.CONFIRMED_ORDER)
  }

  if (loadingProductsCard) return <GenericLoading />
  const showButtonFormation = () => {
    if (loadingProductsCard) return <GenericLoading />

    if (data?.orderReview === ORDER_REVIEW.WAIT_CONFIRM) {
      return (
        <div className="w-full max-w-lg mx-auto rounded-md p-6 items-center  mt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <Button onClick={handleConfirm} disabled={loading}>
              {loading ? 'Confirmando...' : 'Confirmar Cartão'}
            </Button>
          </div>
        </div>
      )
    }

    if (data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER) {
      return (
        <div>
          <h2 className="text-xl font-semibold text-center mb-2">
            Pagamento confirmado!
          </h2>
          <p className="text-center text-base mb-4 text-green-600 font-bold">
            Seu pedido foi confirmado com sucesso no cartão de crédito.
          </p>
        </div>
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
