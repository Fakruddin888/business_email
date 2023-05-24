import { IconButton } from '@mui/material';
import ReorderIcon  from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import "../css/header.css"


const Header = () => {
  return (
    <>
   <div className='header'>
    <div className='header-left'   style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
      <IconButton 
        size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <ReorderIcon sx={{ fontSize: "15px" }}/>
      </IconButton>
    </div>
    <div className='header-middle'>
    <div className='search-mail'>
    <IconButton
      size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <SearchIcon  sx={{ fontSize: "15px" }}></SearchIcon>
      </IconButton>
      <input type="text" placeholder='mail'/>
      <IconButton
        size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <KeyboardArrowDownIcon  sx={{ fontSize: "15px" }}></KeyboardArrowDownIcon>
      </IconButton>
    </div>
    </div>
    
    <div className='header-right'>
    <IconButton
        size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <HelpIcon  sx={{ fontSize: "15px" }}></HelpIcon>
      </IconButton>

      <IconButton
        size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <SettingsIcon sx={{ fontSize: "15px" }}></SettingsIcon>
      </IconButton>
      <IconButton
        size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <AppsIcon  sx={{ fontSize: "15px" }}></AppsIcon>
      </IconButton>

      <IconButton
        size="small"
    aria-label="add"
    sx={{display: "flex", justifyContent: "flex-end"}}>
     <AccountCircleIcon  sx={{ fontSize: "15px" }}></AccountCircleIcon>
      </IconButton>

    </div>
   </div>
   
    </>
  )
}

export default Header;