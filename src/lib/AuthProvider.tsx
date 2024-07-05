// components/AuthProvider.tsx
'use client'

import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react'
import auth from '@/lib/auth'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [lastUsedWorkspaceId, setLastUsedWorkspaceId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const checkAuth = useCallback(() => {
    const authStatus = auth.isAuthenticated()
    setIsAuthenticated(authStatus)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = useCallback(async (token: string) => {
    await auth.saveToken(token)
    checkAuth()
  }, [checkAuth])

  const logout = useCallback(async () => {
    await auth.logout()
    checkAuth()
    router.push('/login')
  }, [checkAuth, router])

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}