import React from 'react'
import './header.css'
import { AiOutlineSearch, AiOutlineMail, AiOutlineBell } from 'react-icons/ai'
import ava from '../../access/images/ava.jpg'
import {Search} from '../index'

function Header() {
  return (
    <header className='header'>

      <Search plholder='Search' icon = {<AiOutlineSearch />}/>
      

      <div className="header_info">
        <div className="header_info-icon"><AiOutlineMail /></div>
        <div className="header_info-icon"><AiOutlineBell /></div>
        <div className="header_info-ava"><img src={ava} alt="" /></div>
      </div>

    </header>
  )
}

export default Header
