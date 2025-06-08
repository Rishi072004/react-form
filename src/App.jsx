import { useState } from 'react'

import './App.css'
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmittedDataPage from './SubmittedDataPage';


function App() {
return(
  <>
  <Router>
    <Routes>
      <Route path='/' element={<LoginForm />}/>
      <Route path="/submitted" element={<SubmittedDataPage />}/>
    </Routes>
  </Router>
  </>
)
  
}

export default App
