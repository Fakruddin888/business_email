import React from 'react'
import EmailListSetting from './EmailListSetting'
import EmailBody from './EmailBody'

import "./css/emailList.css"
import EmailType from './EmailType'
const EmailList = () => {
  return (
    <div className='emailList'>
        <EmailListSetting/>
        <EmailType/>
        <EmailBody name="Md Fakruddin" subject="this is subject" message="this is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration projectthis is a email integration project" time="3:30 Pm"/>
    </div>
  )
}

export default EmailList