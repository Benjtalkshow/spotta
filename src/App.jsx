import React from 'react'
import { CreateReview, Home, Login, Register, Review } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Router >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/review' element={<Review />}/>
          <Route path='/create-review' element={<CreateReview />}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App