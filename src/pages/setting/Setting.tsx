import React from 'react'
import './setting.css'

function Setting() {


  return (
    <div className='setting main_content'>
      <h2 className='content_header'>Danh Sách Gói Vé</h2>
    </div>
  )
}

export default Setting






















// const handleFamAdd = () => {
//   let ranNum
//   const dummyData = {
//     code: `ALTA${ranNum = 9999 + Math.floor(Math.random() * 10000)}`,
//     number: 5421900 + Math.floor(Math.floor(Math.random() * 100000)),
//     status: (Math.floor(Math.random() * 2)) === 0 ? 404 : 300,
//     date: '12/07/2023',
//     date_buy: '12/07/2023',
//     gate: 5,
//     checked: false,
//     type: 'familly'
//   }
//   dispatch(addFamillyTickets(dummyData))
// }

// const handleEventAdd = () => {
//   let ranNum
//   const dummyData = {
//     code: `ALTA${ranNum = 9999 + Math.floor(Math.random() * 10000)}`,
//     number: 5421900 + Math.floor(Math.floor(Math.random() * 100000)),
//     status: (Math.floor(Math.random() * 2)) === 0 ? 300 : 404,
//     date: '12/07/2023',
//     date_buy: '12/07/2023',
//     gate: 1,
//     checked: false,
//     type: 'familly'
//   }
//   dispatch(addEventTickets(dummyData))
// }