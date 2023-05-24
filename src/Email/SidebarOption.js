import React from 'react'
import "../css/sidebarOption.css"

const SidebarOption = ({Icon,title,number,isactive}) => {
  return (
    <div className={`sidebarOption ${isactive && 'sidebarOption--active'}`}>
<Icon/>
<h6>{title}</h6>
<p>{number}</p>

    </div>
  )
}

export default SidebarOption