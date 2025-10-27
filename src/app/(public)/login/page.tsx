import { LoginHeader } from '@/components/auth/Login/Header'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LoginHeader />
    </Suspense>
  )
}
