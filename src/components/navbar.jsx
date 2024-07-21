import { Link, useLocation } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import "../styles/navbar.scss";

const Navbar = ({ toggleDarkMode, darkMode, toggleSidebar }) => {
  const location = useLocation();

  const handleTheme = () => {
    toggleDarkMode();
  }

  if (["/signin", "/private"].includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <div className='content'>
        <nav>
          <MdOutlineMenu size={24} className='menu' onClick={toggleSidebar} />
          <div className="nav-wrapper">
            <div class="toggle-container">
              <input type="checkbox" id="theme-toggle" class="toggle-checkbox" onChange={handleTheme} checked={darkMode} />
              <label for="theme-toggle" class="toggle-label"></label>
            </div>
            <Link to={"#"} className='profile'><BiChat size={24} className='chat icon' /></Link>
            <Link to={"#"} className='notif'><BsBell size={24} className='bell icon' /><span className='count'>12</span></Link>
            <Link to={"#"} className='profile'><FaRegUserCircle size={24} className='user-circle icon' /></Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar