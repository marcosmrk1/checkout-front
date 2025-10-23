import { CardYup } from '@/components/ReviewOrder/PaymentMethod/Form/CardYup'
import { Card } from '@/components/ui/card'
import { useFormik } from 'formik'
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
const CardForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log('Form values:', values)
    },
    validationSchema: CardYup,
  })
  return <form onSubmit={formik.handleSubmit}></form>
}
