import React from 'react'
import './home.css'
import { DatePicker, Progress } from 'antd'

function Home() {
  const waveData = [35, 55]
  return (
    <div className='home main_content'>
      <h2 className='content_header'>Thống Kê</h2>
      <h1>Home</h1>
      <div className="home_dashboard-top">
        <DatePicker />
      </div>
      <div className="home_dashboard-top">
        <DatePicker />
        
      </div>
    </div>
  )
}

export default Home
