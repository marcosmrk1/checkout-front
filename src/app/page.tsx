import { redirectIfNoSession } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  redirect('/catalog')
}
