import React from "react";
import "./css/emailList.css"
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GroupIcon from '@mui/icons-material/Group';
const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype-option emailtype-option--active ">
        <InboxIcon />
        <p>Primary</p>
      </div>

      <div className="emailtype-option">
        <GroupIcon />
        <p>social</p>
      </div>

      <div className="emailtype-option">
      <LocalOfferIcon/>
        <p>promotion</p>
      </div>
    </div>
  );
};

export default EmailType;
