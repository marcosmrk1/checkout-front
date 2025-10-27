'use client'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Switch } from '@/components/ui/switch'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'
import { ShowGenericToast } from '@/components/Generic/Toast'

const LoginYup = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().min(4, 'Mínimo 4 caracteres').required('Senha é obrigatória'),
})

const initialValues = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const formik = useFormik({
    initialValues,
    validationSchema: LoginYup,
    onSubmit: async (values) => {
      setLoading(true)
      const result = await signIn('credentials', {
        ...values,
        rememberMe,
        redirect: false,
        callbackUrl: `/catalog`,
      })
      setLoading(false)
      if (result?.ok) {
        router.push('/catalog')
      }
      if (result?.error) {
        ShowGenericToast({ type: 'error', message: 'Credências inválidas' })
      }
    },
  })
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  {
    error === 'CredentialsSignin' && (
      <div className="text-red-600 mb-4">
        Usuário ou senha inválidos. Tente novamente.
      </div>
    )
  }
  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold ">Seja bem-vindo </h1>
        <p>
          Loja online
          <br />
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••••"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-xs">{formik.errors.password}</div>
        )}
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
        type="submit"
        className={defaultStyleButton + ' w-full'}
        disabled={loading}
      >
        {loading ? 'Carregando' : 'Log in'}
        {loading && <span className="animate-pulse ml-2">...</span>}
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
        onClick={() => signIn('google', { callbackUrl: '/catalog' })}
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
    </form>
  )
}

export { LoginForm }
