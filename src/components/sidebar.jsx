import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { BiChat, BiGroup, BiSearch, BiLogOutCircle } from "react-icons/bi";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location])

  if (["/signin", "/private"].includes(location.pathname)) {
    return null;
  }

  const isActive = (path) => (activeLink === path ? "sidebar-active" : "");
  return (
    <div>
      <div className='sidebar'>
        <div className='logo'>
          <Link to="#"><img className='logo-img' src="logo.png" alt="logo" /></Link>
          <Link to="#" className='logo-text'><div className='logo-name'><span>Mon</span>Patient</div></Link>
        </div>
        <ul className='side-menu'>
          <li>
            <Link to="/" className={isActive("/")} onClick={() => setActiveLink("/")}><MdDashboard size={24} /><span>Home</span></Link>
          </li>
          <li>
            <Link to="/messages" className={isActive("/messages")} onClick={() => setActiveLink("/messages")}><BiChat size={24} /><span>Messages</span></Link>
          </li>
          <li>
            <Link to="/staff" className={isActive("/staff")} onClick={() => setActiveLink("/staff")}><BiGroup size={24} /><span>My Staff</span></Link>
          </li>
          <li>
            <Link to="/search" className={isActive("/search")} onClick={() => setActiveLink("/search")}><BiSearch size={24} /><span>Search</span></Link>
          </li>
          <li>
            <Link to="/documents" className={isActive("/documents")} onClick={() => setActiveLink("/documents")}><IoDocumentTextOutline size={24} /><span>Documents</span></Link>
          </li>
          <li>
            <Link to="/settings" className={isActive("/settings")} onClick={() => setActiveLink("/settings")}><IoSettingsOutline size={24} /><span>Settings</span></Link>
          </li>
        </ul>

        <ul className='side-menu'>
          <li>
            <Link to={"/signin"} className='logout'>
              <BiLogOutCircle size={24} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar