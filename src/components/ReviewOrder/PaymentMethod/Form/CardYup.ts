import * as Yup from 'yup'

const CARD_NUMBER_REGEX = /^\d{16}$/
const VALIDITY_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/
const CVV_REGEX = /^\d{3,4}$/
const CPF_CNPJ_REGEX = /^\d{11}$|^\d{14}$/
const BIRTH_DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/

export const CardYup = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Número do cartão é obrigatório')
    .matches(CARD_NUMBER_REGEX, 'Número do cartão deve ter 16 dígitos'),
  cardName: Yup.string().required('Nome impresso no cartão é obrigatório'),
  validity: Yup.string()
    .required('Validade é obrigatória')
    .matches(VALIDITY_REGEX, 'Formato deve ser MM/AA'),
  cvv: Yup.string()
    .required('Código de verificação é obrigatório')
    .matches(CVV_REGEX, 'CVV deve ter 3 ou 4 dígitos'),
  nickname: Yup.string().required('Apelido para este cartão é obrigatório'),
  cpfCnpj: Yup.string()
    .required('CPF/CNPJ do titular é obrigatório')
    .matches(CPF_CNPJ_REGEX, 'CPF deve ter 11 dígitos ou CNPJ 14 dígitos'),
  birthDate: Yup.string()
    .required('Data de nascimento é obrigatória')
    .matches(BIRTH_DATE_REGEX, 'Formato deve ser DD/MM/AAAA'),
  isDefault: Yup.boolean(),
})
