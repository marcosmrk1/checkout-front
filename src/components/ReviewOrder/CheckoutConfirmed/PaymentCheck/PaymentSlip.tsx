import { ORDER_REVIEW } from '@/@interface/api/ICart'
import usePatchOrderReview from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Barcode } from 'lucide-react'
import { useState } from 'react'
import useGetAllCartProducts from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'

interface PaymentSlipProps {
  setRefresh: React.Dispatch<React.SetStateAction<number>>
}

const PaymentSlip = ({ setRefresh }: PaymentSlipProps) => {
  const { handlePatchOrderReview, success, loading } = usePatchOrderReview()
  const { data, loading: loadingProductsCard } = useGetAllCartProducts()

  const handleConfirm = async () => {
    await handlePatchOrderReview(ORDER_REVIEW.CONFIRMED_ORDER)
  }

  if (loadingProductsCard) return <GenericLoading />

  if (data?.orderReview === ORDER_REVIEW.WAIT_CONFIRM) {
    return (
      <Card className="max-w-lg mx-auto mt-10 shadow-lg">
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="flex flex-col items-center mb-2">
            <Barcode className="h-20 w-32 mb-2 text-primary" />
            <h2 className="text-2xl font-bold ">Pagamento via Boleto Bancário</h2>
            <span className="text-sm ">Aguardando confirmação do pagamento.</span>
          </div>
          <div className="w-full rounded p-4 mb-2 flex flex-col items-center">
            <span className="font-semibold ">Código do Boleto</span>
            <code className="p-3 rounded w-full text-center font-mono text-lg tracking-wider select-all">
              23790.12345 67890.123456 78901.234567 8 12345678901234
            </code>
            <span className="text-xs ">
              Copie o código acima para pagar em qualquer banco, app ou casa lotérica.
            </span>
          </div>
          <Button onClick={handleConfirm} disabled={loading}>
            <a
              href="https://eppg.fgv.br/sites/default/files/teste.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2"
            >
              <Barcode className="w-5 h-5" />
              {loading ? 'Gerando Boleto...' : 'Imprimir Boleto'}
            </a>
          </Button>
          <div className="text-center text-sm mt-4">
            <p>Após o pagamento, a confirmação pode levar até 2 dias úteis.</p>
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
            <Barcode className="h-20 w-32 mb-2 text-primary" />
            <h2 className="text-2xl font-bold ">Pagamento via Boleto Bancário</h2>
            <span className="text-green-600 font-bold text-lg mt-2">
              Pagamento via Boleto confirmado!
            </span>
          </div>
          <div className="text-center text-sm mt-4">
            <p>Após o pagamento, a confirmação pode levar até 2 dias úteis.</p>
            <p className="mt-1">Obrigado por comprar conosco!</p>
          </div>
        </div>
      </Card>
    )
  }

  return null
}

export { PaymentSlip }
