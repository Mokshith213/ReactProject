import React from 'react'
import Form from "./Form"
import Read from "./Read"
import "./global.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Update from './Update';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path='/Read' element={<Read/>}/>
            <Route path='/Update' element={<Update/>}/>
        </Routes>
    </Router>
  )
}

export default App