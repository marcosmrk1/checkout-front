import { LoginForm } from '@/components/Login/Form'

const LoginHeader = () => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/image/picture_padlock.png)',
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-bold">Nome da empresa</span>
          </div>

          <div className="space-y-2">
            <blockquote className="text-3xl font-medium leading-relaxed">
              "Frase de efeito sobre a empresa."
            </blockquote>
            <div>
              <div className="font-semibold">Nome do dono da frase</div>
              <div className="text-white/70">Cargo do dono da frase</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <LoginForm />
      </div>
    </div>
  )
}
export { LoginHeader }
