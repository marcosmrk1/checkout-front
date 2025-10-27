'use client'

import { useSession } from 'next-auth/react'

export function useGetUser() {
  const { data: session, status } = useSession()

  return {
    user: session?.user ?? null,
    loading: status === 'loading',
    isAuthenticated: !!session?.user,
    session,
  }
}
