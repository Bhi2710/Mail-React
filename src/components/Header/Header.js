import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DraftsIcon from '@mui/icons-material/Drafts';
import UndoIcon from '@mui/icons-material/Undo';
import Switch from '@mui/material/Switch';

const Header = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='Header_container'>
            <div className='left_container'>
                <input type="text" placeholder='Search Mail and People' />
                <SearchIcon />
            </div>
            <div className='right_container'>
                <div className='right_container_leftItems'>
                    <AddCircleOutlineIcon />
                    <p>New</p>
                    <KeyboardArrowDownIcon />
                    <div>
                        <DraftsIcon />
                        <p>Mark all as read</p>
                    </div>
                </div>
                <div className='end_container'>
                    <div className='end_container_undo'>
                        <UndoIcon />
                        <p>Undo</p>
                    </div>
                    <div className='end_container_toggle'>
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <p>Try the beta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

