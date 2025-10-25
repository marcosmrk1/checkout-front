import NextAuth, { getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { redirect } from 'next/navigation'

const authOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        if (credentials.email === 'teste@gmail' && credentials.password === '1234') {
          return { id: '1', name: 'Usuário Teste', email: 'teste@gmail' }
        } else {
          return null
        }
      },
    }),
  ],
}
export const redirectIfNoSession = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
