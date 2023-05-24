import React from 'react'
import "./css/emailList.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarIcon from '@mui/icons-material/Star';
import LabelIcon from '@mui/icons-material/Label';
const EmailBody = ({name,subject,message,time}) => {
  return (
    <div className='emailbody'>
    <div className='emailleft'>
<CheckBoxOutlineBlankIcon/>
<StarIcon/>
<LabelIcon/>
<h5>{name}</h5>
    </div>

    <div className='emailmiddle'>
    <div className='emailmiddle__msg'>
<p><b>{subject}</b> {message}</p>
    </div>
  </div>

    <div className='emailright'>
 <p>{time}</p>

    </div>

    </div>
  )
}

export default EmailBody;