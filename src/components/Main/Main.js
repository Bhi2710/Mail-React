import React from 'react'
import './Main.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Main = () => {
  return (
    <div className='Main-class'>
        <div className='emai'>
          <EmailOutlinedIcon />
          <p>Email Body</p>
        </div>
    </div>
  )
}

export default Main