import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'
import usePatchOrderReview from '@/api/hooks/cart/patch/usePatchOrderReview'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { GenericLoading } from '@/components/Generic/Loading'

const OrderFailed = () => {
  const router = useRouter()
  const { handlePatchOrderReview, loading } = usePatchOrderReview()
  const tryAgainOrder = () => {
    handlePatchOrderReview(ORDER_REVIEW.WAIT_CONFIRM)
    loading && <GenericLoading />
    router.push('/review-order?step-order=confirmed')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-10 p-8">
      <Image
        src="/image/failed.png"
        alt="Falha no pedido"
        width={200}
        height={200}
        className="mb-6"
      />
      <h1 className="text-4xl font-extrabold text-destructive mb-2">Falha no Pedido</h1>
      <p className="text-center text-lg max-w-2xl mb-2">
        Ocorreu um erro ao processar seu pedido.
        <br />
        Por favor, tente novamente ou entre em contato com o suporte se o problema
        persistir.
      </p>
      <Button onClick={() => tryAgainOrder()} className={defaultStyleButton}>
        Tentar novamente
      </Button>
    </div>
  )
}

export { OrderFailed }
