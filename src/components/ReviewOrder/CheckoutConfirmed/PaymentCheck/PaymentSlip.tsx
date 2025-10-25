import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { usePatchOrderReviewCart } from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import { TimeBuy } from '@/components/ReviewOrder/Cart/TimeBuy'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Barcode } from 'lucide-react'

import { useState } from 'react'

const PaymentSlip = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleConfirm = () => {
    setLoading(true)
    // const { success: confirmSuccess } = usePatchOrderReviewCart(mutete(
    //   ORDER_REVIEW.CONFIRM_ORDER),
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
          <Barcode className="h-20 w-32 mb-2 text-primary" />
          <h2 className="text-2xl font-bold ">Pagamento via Boleto Bancário</h2>
          <span className="text-sm ">Pedido confirmado com sucesso!</span>
        </div>

        <div className="w-full  rounded p-4 mb-2 flex flex-col items-center">
          <span className="font-semibold ">Código do Boleto</span>
          <code className=" p-3 rounded w-full text-center font-mono text-lg tracking-wider select-all">
            23790.12345 67890.123456 78901.234567 8 12345678901234
          </code>
          <span className="text-xs ">
            Copie o código acima para pagar em qualquer banco, app ou casa lotérica.
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
              <Barcode className="w-5 h-5" />
              {loading ? 'Gerando Boleto...' : 'Imprimir Boleto'}
            </a>
          </Button>
        ) : (
          <span className="text-green-600 font-bold text-lg mt-2">
            Boleto confirmado com sucesso!
          </span>
        )}

        <div className="text-center text-sm  mt-4">
          <p>Após o pagamento, a confirmação pode levar até 2 dias úteis.</p>
          <p className="mt-1">Obrigado por comprar conosco!</p>
        </div>
      </div>
    </Card>
  )
}

export { PaymentSlip }
