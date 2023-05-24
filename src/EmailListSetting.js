import React from 'react';
import "./css/emailList.css"
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const EmailListSetting = () => {
  return (
    <div className='EmailList_Setting'>
    <div className='emaillist_settingsLeft'>
    <IconButton>
<CheckBoxOutlineBlankIcon/>
    </IconButton>

    <IconButton>
<ArrowDownwardIcon/>
    </IconButton>

    <IconButton>
<RefreshIcon/>
    </IconButton>

    <IconButton>
<MoreVertIcon/>
    </IconButton>

    </div>
    
    <div className='emaillist_settingsRight'>

    <p>1-50 of 10,222</p>
    <IconButton>
<ChevronLeftIcon/>
    </IconButton>

    <IconButton>
<ChevronRightIcon/>
    </IconButton>
    </div>
    </div>
  )
}

export default EmailListSetting