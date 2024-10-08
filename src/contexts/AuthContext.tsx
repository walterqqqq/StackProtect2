import React, { createContext, useState, useContext, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Test users
const testUsers = [
  { id: '1', name: 'Test User', email: 'user@test.com', password: 'password123', role: 'user' as const },
  { id: '2', name: 'Admin User', email: 'admin@test.com', password: 'admin123', role: 'admin' as const },
]

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const foundUser = testUsers.find(u => u.email === email && u.password === password)
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
    } else {
      throw new Error('Invalid email or password')
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}