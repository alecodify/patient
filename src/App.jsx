import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Staff, Search, Settings, Signin, Private, Document, Message } from './screens';
import { Navbar, Sidebar } from './components';
import { useState } from 'react';
import './App.css'

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  }

  return (
    <Router>
      <div className='content-container'>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={isDarkMode} />
        <Sidebar />
        <Routes>
          <Route path='/' excat element={<Dashboard />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/messages' element={<Message />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/private' element={<Private />} />
          <Route path='/search' element={<Search />} />
          <Route path='/documents' element={<Document />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
