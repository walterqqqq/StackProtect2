import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Home, Book, Award, Users, LogOut } from 'lucide-react'
import { Button } from './ui/button'

const Navigation: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) return null

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold">Aware2Protect</Link>
        <div className="flex space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/dashboard" className="flex items-center"><Home className="mr-1 h-4 w-4" /> Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/courses" className="flex items-center"><Book className="mr-1 h-4 w-4" /> Courses</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/certificate" className="flex items-center"><Award className="mr-1 h-4 w-4" /> Certificate</Link>
          </Button>
          {user.role === 'admin' && (
            <Button variant="ghost" asChild>
              <Link to="/team-dashboard" className="flex items-center"><Users className="mr-1 h-4 w-4" /> Team</Link>
            </Button>
          )}
          <Button variant="ghost" onClick={handleLogout} className="flex items-center">
            <LogOut className="mr-1 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation