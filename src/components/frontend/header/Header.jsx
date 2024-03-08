import React from 'react'
import headerCss from '../../../assets/css/header.module.css'

function Header(props) {
  return (
    <div className={headerCss.header}>{props.headerContent}</div>
  )
}

export default Header