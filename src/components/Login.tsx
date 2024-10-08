import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Lock } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      const from = (location.state as any)?.from?.pathname || '/dashboard'
      navigate(from, { replace: true })
    } catch (error) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <Lock className="mr-2" /> Login to CyberLearn
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-destructive text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button className="w-full mt-6" type="submit">Login</Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="w-full text-sm text-muted-foreground">
            <p>Test User: user@test.com / password123</p>
            <p>Admin User: admin@test.com / admin123</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login