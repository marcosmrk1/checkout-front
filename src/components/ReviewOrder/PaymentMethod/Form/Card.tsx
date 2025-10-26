import { CardYup } from '@/components/ReviewOrder/PaymentMethod/Form/CardYup'
import { useFormik } from 'formik'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import {
  addCreditCardInfo,
  CREDIT_CARD_STORAGE_KEY,
} from '@/utils/localStorage/CreditCard'
import usePostCardCredit from '@/api/service/hooks/creditCart/usePost/usePostCardCredit'
import useGetCreditCard from '@/api/service/hooks/creditCart/useGet/useGetCreditCard'
import { GenericLoading } from '@/components/Generic/Loading'
import { Card } from '@/components/ui/card'
import { BadgeCheck } from 'lucide-react'

const initialValues = {
  cardNumber: '',
  cardName: '',
  validity: '',
  cvv: '',
  nickname: '',
  cpfCnpj: '',
  birthDate: '',
  isDefault: false,
}

const CardCreditForm = () => {
  const { handleAddProduct } = usePostCardCredit()
  const { data, loading } = useGetCreditCard()
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const payload = {
        ...values,
        last4Number: values.cardNumber.slice(-4), // Adiciona o campo obrigatório
      }
      handleAddProduct(payload)
    },
    validationSchema: CardYup,
  })
  if (loading) return <GenericLoading />
  if (data?.last4Number) {
    return (
      <Card className="max-w-md mx-auto mt-8 p-6 flex flex-col items-center bg-green-50 border-green-200 shadow-md">
        <BadgeCheck className="w-10 h-10 text-green-600 mb-2" />
        <h2 className="text-lg font-semibold text-green-700 mb-1">
          Cartão já cadastrado!
        </h2>
        <p className="text-base text-gray-700">
          Você já possui um cartão cadastrado com final{' '}
          <span className="font-bold">{data.last4Number}</span>
        </p>
      </Card>
    )
  }
  return (
    <form onSubmit={formik.handleSubmit} className="max-w-[700px] mx-auto">
      <div className="flex gap-6">
        <div className="w-70 h-40 bg-gray-400 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/sim-card-chip.png"
              alt="chip"
              className="w-10 mb-2"
            />
          </div>
          <div>
            <div className="text-white text-lg tracking-widest">•••• •••• •••• ••••</div>
            <div className="text-white text-base mt-2">NOME IMPRESSO</div>
            <div className="text-white text-sm mt-1">Válido até ••/••</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-2">
            <Label htmlFor="cardNumber">Número do cartão*</Label>
            <Input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full"
            />
            {formik.touched.cardNumber && formik.errors.cardNumber && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.cardNumber}</div>
            )}
          </div>
          <div className="mb-2">
            <Label htmlFor="cardName">Nome impresso no cartão*</Label>
            <Input
              id="cardName"
              type="text"
              name="cardName"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full"
            />
            {formik.touched.cardName && formik.errors.cardName && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.cardName}</div>
            )}
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1">
              <Label htmlFor="validity">Validade*</Label>
              <Input
                id="validity"
                type="text"
                name="validity"
                value={formik.values.validity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              {formik.touched.validity && formik.errors.validity && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.validity}</div>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="cvv">Código de verificação*</Label>
              <Input
                id="cvv"
                type="text"
                name="cvv"
                value={formik.values.cvv}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              {formik.touched.cvv && formik.errors.cvv && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.cvv}</div>
              )}
            </div>
          </div>
          <div className="mb-2">
            <Label htmlFor="nickname">Apelido para este cartão*</Label>
            <Input
              id="nickname"
              type="text"
              name="nickname"
              value={formik.values.nickname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full"
            />
            {formik.touched.nickname && formik.errors.nickname && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.nickname}</div>
            )}
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1">
              <Label htmlFor="cpfCnpj">CPF/CNPJ do titular*</Label>
              <Input
                id="cpfCnpj"
                type="text"
                name="cpfCnpj"
                value={formik.values.cpfCnpj}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              {formik.touched.cpfCnpj && formik.errors.cpfCnpj && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.cpfCnpj}</div>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="birthDate">Data de nascimento*</Label>
              <Input
                id="birthDate"
                type="text"
                name="birthDate"
                value={formik.values.birthDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              {formik.touched.birthDate && formik.errors.birthDate && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.birthDate}
                </div>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isDefault"
                checked={formik.values.isDefault}
                onChange={formik.handleChange}
                className="mr-2 accent-blue-600"
              />
              Este é meu cartão padrão
            </label>
          </div>
          <Button
            type="submit"
            className="mt-4 px-6 py-2"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Salvando...' : 'Confirmar'}
          </Button>
        </div>
      </div>
    </form>
  )
}

export { CardCreditForm }
