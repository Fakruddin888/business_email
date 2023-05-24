import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StarRateIcon from '@mui/icons-material/StarRate';
import DeleteIcon from '@mui/icons-material/Delete';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {useDispatch} from 'react-redux';
import LabelIcon from '@mui/icons-material/Label';
import InboxIcon from "@mui/icons-material/Inbox";
import "../css/sidebar.css";
import SidebarOption from "./SidebarOption";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose_btn" onClick={()=>dispatch(openSendMessage())}>
        compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="inbox" number="224" isactive={true}/>

      <SidebarOption Icon={StarRateIcon} title="Starred" number="224" />

      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number="224" />

      <SidebarOption Icon={LabelImportantIcon} title="Important" number="224" />

      <SidebarOption Icon={SendIcon} title="Sent" number="224" />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number="224" />
      <SidebarOption Icon={DeleteIcon} title="delete" number="224" />
      <SidebarOption Icon={LabelIcon} title="Trash/[Map]" number="224" />
      <SidebarOption Icon={DocumentScannerIcon} title="Document" number="224" />
      <SidebarOption Icon={ExpandMoreIcon} title="more" number="224" />
      <hr/>
       <h5 className="sidebarOption-heading"> Meet</h5>
      
       <SidebarOption Icon={VideocamIcon} title="New Meeting"/>
       <SidebarOption Icon={KeyboardIcon} title="join a Meeting"/>
    </div>

  );
};

export default Sidebar;
