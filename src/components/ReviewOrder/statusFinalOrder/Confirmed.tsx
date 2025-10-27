import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'
import usePatchOrderReview from '@/api/hooks/cart/patch/usePatchOrderReview'
import { GenericLoading } from '@/components/Generic/Loading'
import useDeleteCart from '@/api/hooks/cart/del/useDeleteCart'

export default function OrderConfirmed() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-10 p-8">
      <Image
        src="/image/ok.png"
        alt="Pedido confirmado"
        width={200}
        height={200}
        className="mb-6"
      />
      <h1 className="text-4xl font-extrabold text-green-600 mb-2">Pedido Confirmado!</h1>
      <p className="text-center text-lg max-w-2xl mb-2">
        Seu pedido foi realizado com sucesso.
        <br />
        Em breve você receberá as informações de acompanhamento no seu e-mail.
      </p>
      <Button onClick={() => router.push('/')} className={defaultStyleButton}>
        Voltar para a loja
      </Button>
    </div>
  )
}
