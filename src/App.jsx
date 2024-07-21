import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Staff, Search, Settings, Signin, Private, Document, Message } from './screens';
import { Navbar, Sidebar } from './components';
import { useState } from 'react';
import './App.css';
import "./styles/menu.scss";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className={`${isCollapsed ? "content-container" : ""}`}>
        <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} darkMode={isDarkMode} />
        <Sidebar isCollapsed={isCollapsed} />
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
