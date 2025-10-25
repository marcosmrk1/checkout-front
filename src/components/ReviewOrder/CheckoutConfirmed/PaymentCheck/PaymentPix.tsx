import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { usePatchOrderReviewCart } from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import { TimeBuy } from '@/components/ReviewOrder/Cart/TimeBuy'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { QrCode } from 'lucide-react'

import { useState } from 'react'

const PaymentPix = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleConfirm = () => {
    setLoading(true)
    // const { success: confirmSuccess } = usePatchOrderReviewCart(
    //   ORDER_REVIEW.WAIT_CONFIRM,
    // )
    // setTimeout(() => {
    //   setLoading(false)
    //   setSuccess(confirmSuccess)
    // }, 800)
  }

  return (
    <Card className="max-w-lg mx-auto mt-10 shadow-lg">
      <TimeBuy />
      <div className="flex flex-col items-center justify-center p-8 gap-4">
        <div className="flex flex-col items-center mb-2">
          <QrCode className="h-20 w-32 mb-2 text-primary" />
          <h2 className="text-2xl font-bold ">Pagamento via Pix</h2>
          <span className="text-sm ">Pedido confirmado com sucesso!</span>
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
        {!success ? (
          <Button onClick={handleConfirm} disabled={loading}>
            <a
              href="https://eppg.fgv.br/sites/default/files/teste.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 mt-2`}
            >
              <QrCode className="w-5 h-5" />
              {loading ? 'Gerando Comprovante...' : 'Comprovante Pix'}
            </a>
          </Button>
        ) : (
          <span className="text-green-600 font-bold text-lg mt-2">
            Pagamento via Pix confirmado!
          </span>
        )}

        <div className="text-center text-sm mt-4">
          <p>Após o pagamento, a confirmação pode levar até 30 minutos.</p>
          <p className="mt-1">Obrigado por comprar conosco!</p>
        </div>
      </div>
    </Card>
  )
}

export { PaymentPix }
