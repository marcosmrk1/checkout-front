import { getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { redirect } from 'next/navigation'
import NextAuth from 'next-auth'

const users = [
  {
    id: '1',
    name: 'Marcos',
    email: 'marcospl.134@gmaill.com',
    password: '1234',
    image: '/image/peopleMarcos.jpg',
  },
  {
    id: '2',
    name: 'Leandra',
    email: 'Leandra@gmail',
    password: '1234',
    image: '/image/peopleLeandra.jpg',
  },
]
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
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password,
        )
        if (user) {
          const { password, ...userWithoutPassword } = user
          return userWithoutPassword
        }
        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
