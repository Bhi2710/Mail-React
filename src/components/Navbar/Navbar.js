import React from 'react';
import "./Navbar.css";
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
const Navbar = () => {
  return (
    <div className='Navbar_container'>
      <div className='left_aside'>
        <AppsIcon />
        <h4>Outlook Mail</h4>
      </div>
      <div className='right_aside'>
        <MessageIcon />
      </div>
    </div>
  )
}

export default Navbar;