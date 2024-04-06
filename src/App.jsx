import React from 'react'
import { Home, Login, Review } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Router >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/review' element={<Review />}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App