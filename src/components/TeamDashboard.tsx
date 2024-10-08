import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Users, CheckCircle, XCircle } from 'lucide-react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const teamMembers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', completedCourses: ['Password Security', 'Phishing Protection'] },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', completedCourses: ['Password Security'] },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', completedCourses: [] },
]

const TeamDashboard: React.FC = () => {
  const { user } = useAuth()

  if (!user || user.role !== 'admin') {
    return <div>You do not have permission to view this page.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Users className="mr-2" /> Team Progress Dashboard
      </h1>
      <Table>
        <TableCaption>Team members' course completion status</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Password Security</TableHead>
            <TableHead>Phishing Protection</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                {member.completedCourses.includes('Password Security') ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </TableCell>
              <TableCell>
                {member.completedCourses.includes('Phishing Protection') ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TeamDashboard