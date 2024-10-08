import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { Book, Award, Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Button } from './ui/button'

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  if (!user) {
    return <div>Please log in to view your dashboard.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="w-6 h-6 mr-2 text-primary" />
              Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore our cybersecurity courses and continue your learning journey.</p>
            <Button asChild>
              <Link to="/courses">View Courses</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View and download your earned certificates.</p>
            <Button asChild>
              <Link to="/certificate">View Certificates</Link>
            </Button>
          </CardContent>
        </Card>
        {user.role === 'admin' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Team Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Monitor your team's progress and course completion status.</p>
              <Button asChild>
                <Link to="/team-dashboard">View Team Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Dashboard