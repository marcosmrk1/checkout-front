'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Switch } from '@/components/ui/switch'
import { useRouter } from 'next/navigation'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'

const LoginForm = () => {
  const [email, setEmail] = useState('alex.jordan@gmail.com')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const router = useRouter()
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold ">Seja bem-vindo </h1>
        <p>
          breve descrição sobre o projeto
          <br />
          algo complementar nao obrigatorio.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••"
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-3">
          <Switch
            checked={rememberMe}
            onCheckedChange={setRememberMe}
            className=" data-[state=checked]:bg-green-500 text-2xl spacing-1"
          />
          <span className="text-sm ">Lembrar dos detalhes</span>
        </div>

        <Button
          onClick={() => router.push('/catalog')}
          className={defaultStyleButton + ' w-full'}
        >
          Log in
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="  px-2 text-gray-500">OR</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center space-x-2 py-3 0"
          onClick={() => console.log('Continuing with Google...')}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-medium ">Continue with Google</span>
        </Button>

        <div className="text-center">
          <span className="text-sm ">
            Don't have an account?{' '}
            <button className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
              Sign up
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
export { LoginForm }
