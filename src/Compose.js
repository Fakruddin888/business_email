import React from 'react'
import "./css/compose.css"
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import CreateIcon from '@mui/icons-material/Create';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'
import { closeSendMessage } from './features/mailSlice';
const Compose = () => {
  const dispatch = useDispatch()
  return (
    <div className='compose'>
  <div className='compose__header'>
    <div className='compose__header__left'>
<span>new message</span>
    </div>
    <div className='compose__header__right'>
    <RemoveIcon/>
    <HeightIcon/>
    <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
    </div>
  </div>

  <div className='compose__body'>
  <div className='compose__bodyform'>
    <input type='text' placeholder='To'/>
    <input type='text' placeholder='cc'/>
    <input type='text' placeholder='Bcc'/>

    <input type='text' placeholder='Subject'/>

    <textarea rows="20"></textarea>
  </div>
  </div>

  <div className='compose__footer'>
<div className='compose__footerLeft'>
<button type='submit'>Send <ArrowDownwardIcon/></button>

</div>
<div className='compose__footerRight'>
<FormatColorTextIcon/>
<AttachFileIcon/>
<LinkIcon/>
<EmojiEmotionsIcon/>
<NoteAddIcon/>
<PhotoIcon/>
<CreateIcon/>
<PhonelinkIcon/>
<MoreVertIcon/>
<DeleteIcon/>
</div>
  </div>
    </div>
  )
}

export default Compose