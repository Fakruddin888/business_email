import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import EmailList from '../EmailList';
import "../css/mainBody.css";
import Compose from '../Compose';
import {useSelector} from 'react-redux'
import { selectSendMessageIsOpen } from "../features/mailSlice";

const MainBody = () => {
  const isMessageOpen = useSelector(selectSendMessageIsOpen)
  console.log(isMessageOpen)
  return (
    <div className='header-section'>
      <Header/>
      <div className='body-section'>
       <Sidebar/>
       <EmailList/>
      
      </div>
      {
        isMessageOpen &&  <Compose/>
      }
     
    </div>
  )
}

export default MainBody;