import React from 'react'
import { Shield, Mail, Lock, Globe, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const courses = [
  { 
    id: 1, 
    title: 'Password Security', 
    icon: Lock, 
    description: 'Learn best practices for creating and managing secure passwords.',
    modules: [
      'Password Complexity',
      'Password Managers',
      'Multi-Factor Authentication'
    ]
  },
  { 
    id: 2, 
    title: 'Phishing Protection', 
    icon: Mail, 
    description: 'Identify and protect yourself from phishing attempts and email scams.',
    modules: [
      'Recognizing Phishing Emails',
      'Safe Browsing Habits',
      'Reporting Suspicious Activities'
    ]
  },
  { 
    id: 3, 
    title: 'Network Security', 
    icon: Globe, 
    description: 'Understand the basics of network security and how to protect your data.',
    modules: [
      'Firewalls and VPNs',
      'Wi-Fi Security',
      'Public Network Safety'
    ]
  },
  { 
    id: 4, 
    title: 'Social Engineering Awareness', 
    icon: AlertTriangle, 
    description: 'Learn to recognize and prevent social engineering attacks.',
    modules: [
      'Types of Social Engineering',
      'Psychological Manipulation Techniques',
      'Building a Security-Conscious Culture'
    ]
  },
]

const CourseList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <course.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Modules:</h3>
              <ul className="list-disc list-inside">
                {course.modules.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Start Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CourseList