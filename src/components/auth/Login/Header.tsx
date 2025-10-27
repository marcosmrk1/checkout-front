'use client'
import { LoginForm } from '@/components/auth/Login/Form'
import { Session } from 'inspector/promises'
import { SessionProvider } from 'next-auth/react'
const LoginHeader = () => {
  return (
    <SessionProvider>
      <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-cover bg-center">
            <img
              src="/images/picture_padlock.png"
              alt="Cadeado"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0" />
          <div className="relative z-10 flex flex-col justify-between p-12 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-bold">Cn Shopping</span>
            </div>

            <div className="space-y-2">
              <blockquote className="text-3xl font-medium leading-relaxed">
                "Comprar bem é investir no seu próprio bem-estar."
              </blockquote>
              <div>
                <div className="font-semibold">Marcos Paulo</div>
                <div className="text-white/70">Fundador da CN Shopping</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 ">
          <LoginForm />
        </div>
      </div>
    </SessionProvider>
  )
}
export { LoginHeader }
