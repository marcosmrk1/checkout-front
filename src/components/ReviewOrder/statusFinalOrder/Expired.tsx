import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'

const OrderExpired = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-10 p-8">
      <Image
        src="/image/download.png"
        alt="Pedido expirado"
        width={200}
        height={200}
        className="mb-6"
      />
      <h1 className="text-4xl font-extrabold text-destructive mb-2">Pedido Expirado</h1>
      <p className="text-center text-lg max-w-2xl mb-2">
        O seu pedido foi expirado por falta de confirmação ou pagamento.
        <br />
        Por favor, realize um novo pedido para continuar sua compra.
      </p>
      <Button onClick={() => router.push('/')} className={defaultStyleButton}>
        Voltar para a loja
      </Button>
    </div>
  )
}
export { OrderExpired }
