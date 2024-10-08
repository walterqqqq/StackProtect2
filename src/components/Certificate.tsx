import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const Certificate: React.FC = () => {
  const { user } = useAuth()

  if (!user) {
    return <div>Please log in to view your certificate.</div>
  }

  const allCoursesCompleted = true // This should be determined based on the user's actual progress

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Award className="mr-2" /> Your Certificate
      </h1>
      <Card className="text-center">
        <CardHeader>
          <Award className="w-24 h-24 mx-auto mb-4 text-primary" />
          <CardTitle>{allCoursesCompleted ? "Certificate of Completion" : "Courses Not Completed"}</CardTitle>
        </CardHeader>
        <CardContent>
          {allCoursesCompleted ? (
            <>
              <p className="text-lg mb-4">This certifies that</p>
              <p className="text-2xl font-bold mb-4">{user.name}</p>
              <p className="text-lg mb-4">has successfully completed all courses in the</p>
              <p className="text-xl font-bold mb-4">Cyber Security Awareness Program</p>
            </>
          ) : (
            <>
              <p className="text-xl mb-4">You haven't completed all courses yet.</p>
              <p>Complete all courses to earn your certificate!</p>
            </>
          )}
        </CardContent>
        <CardFooter className="justify-center">
          {allCoursesCompleted && (
            <Button>Download Certificate</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Certificate