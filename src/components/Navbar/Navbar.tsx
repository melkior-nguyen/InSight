import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { PiTicketThin } from 'react-icons/pi'
import { LiaFileInvoiceSolid } from 'react-icons/lia'
import { IoSettingsOutline } from 'react-icons/io5'
import logo from '../../access/images/insight-05 1.png'

function Navbar() {
  const [activedLink, setActivedLink] = useState<number>(1)
  //active link function
  const handleActivedLink = (id: number) => {
    setActivedLink(id)
  }

  return (
    <div className='nav'>
      <div className="nav_container">
        <div className="nav_logo">
          <Link to='/' onClick={() => handleActivedLink(1)}>
            <img src={logo} alt="Insight logo" />
          </Link>
        </div>

        <Link to='/'
          style={{ textDecoration: 'none' }}
          className={activedLink === 1 ? ' nav_link actived' : 'nav_link'}
          onClick={() => handleActivedLink(1)}>
          <BiHomeAlt className='nav_link-icon' />
          Home
        </Link>

        <Link to='/ticketmanagement'
          style={{ textDecoration: 'none' }}
          className={activedLink === 2 ? ' nav_link actived' : 'nav_link'}
          onClick={() => handleActivedLink(2)}>
          <PiTicketThin className='nav_link-icon' />
          Quản lý vé
        </Link>

        <Link to='/ticketcheck'
          style={{ textDecoration: 'none' }}
          className={activedLink === 3 ? ' nav_link actived' : 'nav_link'}
          onClick={() => handleActivedLink(3)}>
          <LiaFileInvoiceSolid className='nav_link-icon' />
          Đối soát vé
        </Link>

        <Link to='/setting'
          style={{ textDecoration: 'none' }}
          className={activedLink === 4 ? ' nav_link actived' : 'nav_link'}
          onClick={() => handleActivedLink(4)}>
          <IoSettingsOutline className='nav_link-icon' />
          Cài đặt
          <div className="nav_link-option">
            <Link to='/setting' className='nav_link-item'>Gói dịch vụ</Link>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Navbar
