import { TimeBuy } from '@/components/ReviewOrder/Cart/TimeBuy'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'
import { Barcode } from 'lucide-react'

const PaymentSlip = () => {
  return (
    <Card className="max-w-lg mx-auto mt-10 shadow-lg">
      <TimeBuy />
      <div className="flex flex-col items-center justify-center p-8 gap-4">
        <div className="flex flex-col items-center mb-2">
          <Barcode className="h-20 w-32 mb-2 text-primary" />
          <h2 className="text-2xl font-bold text-green-700 mb-1">
            Pagamento via Boleto Bancário
          </h2>
          <span className="text-sm text-gray-500">Pedido confirmado com sucesso!</span>
        </div>

        <div className="w-full bg-green-50 border border-green-200 rounded p-4 mb-2 flex flex-col items-center">
          <span className="font-semibold text-gray-700 mb-1">Código do Boleto</span>
          <code className="bg-muted p-3 rounded w-full text-center font-mono text-lg tracking-wider select-all">
            23790.12345 67890.123456 78901.234567 8 12345678901234
          </code>
          <span className="text-xs text-gray-500 mt-2">
            Copie o código acima para pagar em qualquer banco, app ou casa lotérica.
          </span>
        </div>
        <Button>
          <a
            href="https://eppg.fgv.br/sites/default/files/teste.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`  flex items-center justify-center gap-2 mt-2`}
          >
            <Barcode className="w-5 h-5" />
            Imprimir Boleto
          </a>
        </Button>

        <div className="text-center text-sm text-gray-600 mt-4">
          <p>Após o pagamento, a confirmação pode levar até 2 dias úteis.</p>
          <p className="mt-1">Obrigado por comprar conosco!</p>
        </div>
      </div>
    </Card>
  )
}

export { PaymentSlip }
