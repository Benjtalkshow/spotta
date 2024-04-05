import React from 'react'
import { Home, Login } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
  )
}

export default App