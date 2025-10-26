import * as Yup from 'yup'

export const CardYup = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Número do cartão é obrigatório')
    .min(8, 'Mínimo 8 caracteres'),
  cardName: Yup.string()
    .required('Nome impresso no cartão é obrigatório')
    .min(3, 'Mínimo 3 caracteres'),
  validity: Yup.string()
    .required('Validade é obrigatória')
    .min(4, 'Mínimo 4 caracteres'),
  cvv: Yup.string()
    .required('Código de verificação é obrigatório')
    .min(3, 'Mínimo 3 caracteres'),
  nickname: Yup.string()
    .required('Apelido para este cartão é obrigatório')
    .min(2, 'Mínimo 2 caracteres'),
  cpfCnpj: Yup.string()
    .required('CPF/CNPJ do titular é obrigatório')
    .min(8, 'Mínimo 8 caracteres'),
  birthDate: Yup.string()
    .required('Data de nascimento é obrigatória')
    .min(4, 'Mínimo 4 caracteres'),
  isDefault: Yup.boolean(),
})
