import LoginForm from '@/components/Forms/LoginForm'
import { Loader2 } from 'lucide-react'
export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/picture_padlock.png)',
          }}
        />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-8 bg-amber-50  rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-bold">Nome da empresa</span>
          </div>

          <div className="space-y-2">
            <blockquote className="text-3x4 font-medium leading-relaxed">
              "Frase de efeito sobre a empresa."
            </blockquote>
            <div>
              <div className="font-semibold">Nome do dono da frase</div>
              <div className="text-gray-300">Cargo do dono da frase</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <LoginForm />
      </div>
    </div>
  )
}
