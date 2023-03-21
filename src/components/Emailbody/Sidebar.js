import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Sidebar.css';

const Sidebar = () => {

  

  return (
    <div className='Sidebar_container'>
        <div className='Sidebar_container_folders'>
            <KeyboardArrowUpIcon />
            <p>Folders</p>
        </div>
        <div className='btn_container'>
            <div className='buttons active'>
              <p>Input</p>
              <p>2</p>
            </div>
            <div className='buttons'>
              <p>Junk Email</p>
            </div>
            <div className='buttons'>
              <p>Drafts</p>
            </div>
            <div className='buttons' >
              <p>Spam</p>
              <p>2</p>
            </div>
            <div className='buttons'>
              <p>Deleted Items</p>
            </div>
            <div className='buttons'>
              <p>Archive</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;