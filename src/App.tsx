import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import Main from './components/Main'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      {isLoggedIn ? (
        <Main onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  )
}

export default App

