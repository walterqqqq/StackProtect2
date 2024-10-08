import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CourseList from './components/CourseList'
import TeamDashboard from './components/TeamDashboard'
import Certificate from './components/Certificate'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <>
                    <Navigation />
                    <div className="container mx-auto px-4 py-8">
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/courses" element={<CourseList />} />
                        <Route path="/team-dashboard" element={<TeamDashboard />} />
                        <Route path="/certificate" element={<Certificate />} />
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    </div>
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App