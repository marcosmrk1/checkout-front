import { ORDER_REVIEW } from '@/@interface/api/ICart'
import usePatchOrderReview from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { QrCode } from 'lucide-react'
import { GenericLoading } from '@/components/Generic/Loading'
import useGetAllCartProducts from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { useSearchParams } from 'next/navigation'
import { URL_FORCED_ERRO_PIX, URL_FORCED_ERROR } from '@/@URLQueries/UforcedError'

const PaymentPix = () => {
  const { handlePatchOrderReview, loading } = usePatchOrderReview()
  const { data, loading: loadingProductsCard } = useGetAllCartProducts()
  const searchParams = useSearchParams()
  const forcedError = searchParams.get(URL_FORCED_ERROR)
  const handleConfirm = async () => {
    if (forcedError === URL_FORCED_ERRO_PIX) {
      await handlePatchOrderReview(ORDER_REVIEW.FAILED)
      return
    }
    await handlePatchOrderReview(ORDER_REVIEW.CONFIRMED_ORDER)
  }

  if (loadingProductsCard) return <GenericLoading />

  if (data?.orderReview === ORDER_REVIEW.WAIT_CONFIRM) {
    return (
      <Card className="max-w-lg mx-auto mt-10 shadow-lg">
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="flex flex-col items-center mb-2">
            <QrCode className="h-20 w-32 mb-2 text-primary" />
            <h2 className="text-2xl font-bold ">Pagamento via Pix</h2>
            <span className="text-sm ">Aguardando confirmação do pagamento.</span>
          </div>
          <div className="w-full rounded p-4 mb-2 flex flex-col items-center">
            <span className="font-semibold ">Chave Pix Copia e Cola</span>
            <code className="p-3 rounded w-full text-center font-mono text-lg tracking-wider select-all">
              123e4567-e89b-12d3-a456-426614174000
            </code>
            <span className="text-xs ">
              Copie a chave acima e pague no app do seu banco ou escaneie o QR Code.
            </span>
          </div>
          <Button onClick={handleConfirm} disabled={loading}>
            <a
              href="https://eppg.fgv.br/sites/default/files/teste.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2"
            >
              <QrCode className="w-5 h-5" />
              {loading ? 'Gerando Comprovante...' : 'Comprovante Pix'}
            </a>
          </Button>
          <div className="text-center text-sm mt-4">
            <p>Após o pagamento, a confirmação pode levar até 30 minutos.</p>
            <p className="mt-1">Obrigado por comprar conosco!</p>
          </div>
        </div>
      </Card>
    )
  }

  if (data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER) {
    return (
      <Card className="max-w-lg mx-auto mt-10 shadow-lg">
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="flex flex-col items-center mb-2">
            <QrCode className="h-20 w-32 mb-2 text-primary" />
            <h2 className="text-2xl font-bold ">Pagamento via Pix</h2>
            <span className="text-green-600 font-bold text-lg mt-2">
              Pagamento via Pix confirmado!
            </span>
          </div>
          <div className="text-center text-sm mt-4">
            <p>Após o pagamento, a confirmação pode levar até 30 minutos.</p>
            <p className="mt-1">Obrigado por comprar conosco!</p>
          </div>
        </div>
      </Card>
    )
  }

  return null
}

export { PaymentPix }
