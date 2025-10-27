import { useCartStore } from '@/store/cartStore'
import { ShowGenericToast } from '@/components/Generic/Toast'
import { useCallback } from 'react'
import { IProduct } from '@/@interface/api/IProduct'
import { useCartCreditStore } from '@/store/cartCredit'
import { ICardCredit } from '@/@interface/api/ICardCredit'

const usePostCardCredit = () => {
  const { creditCardInfo, loading, postCreditCardInfo } = useCartCreditStore()

  const handleAddProduct = useCallback(
    async (cardCredit: ICardCredit) => {
      const result = await postCreditCardInfo(cardCredit)
      if (result.success) {
        ShowGenericToast({
          type: 'success',
          message: 'Cartão adicionado com sucesso!',
        })
      } else {
        ShowGenericToast({
          type: 'error',
          message: result.message || 'Erro ao adicionar produto.',
        })
      }
    },
    [postCreditCardInfo],
  )

  return {
    handleAddProduct,
    creditCardInfo,
    loading,
  }
}

export default usePostCardCredit
