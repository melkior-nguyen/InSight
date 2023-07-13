import React from 'react'
import './pack.css'
import './familly.css'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { testData, dataType } from './testdata'

function Familly() {
  const columns: ColumnsType<dataType> = [
    {
      key: 'id',
      title: 'STT',
      dataIndex: 'id'
    },
    {
      key: 'code',
      title: 'Booking Code',
      dataIndex: 'code'
    },
    {
      key: 'number',
      title: 'Số vé',
      dataIndex: 'number'
    },
    {
      key: 'status',
      title: 'Tình trạng sử dụng',
      dataIndex: 'status',
      render: (status: number): any => {
        if (status === 200) { return 'Đã sử dụng' }
        else if (status === 404) { return 'Hết hạn' }
        else if (status === 300) { return 'Chưa sử dụng' }
      }
    },
    {
      key: 'date',
      title: 'Ngày sử dụng',
      dataIndex: 'date'
    },
    {
      key: 'date_buy',
      title: 'Ngày xuất vé',
      dataIndex: 'date_buy'
    },
    {
      key: 'gate',
      title: 'Cổng Check - In',
      dataIndex: 'gate',
      render: (gate): any => {
        if (gate === 1) return 'Cổng 1'
        if (gate === 2) return 'Cổng 2'
        if (gate === 3) return 'Cổng 3'
      }
    },
  ]


  return (
    <div className='ticketmn_pack'>
      <Table
        columns={columns}
        dataSource={testData}
        pagination={{pageSize: 6}} className='table'/>
    </div>
  )
}

export default Familly


  // < div className = "ticketmn_lists" >
  //   <Row className='ticketmn_row'>
  //     <Col md={3} className='ticketmn_col'>STT</Col>
  //     <Col md={3} className='ticketmn_col'>Booking Code</Col>
  //     <Col md={3} className='ticketmn_col'>Số vé</Col>
  //     <Col md={5} className='ticketmn_col'>Tình trạng sử dụng</Col>
  //     <Col md={3} className='ticketmn_col'>Ngày sử dụng</Col>
  //     <Col md={3} className='ticketmn_col'>Ngày xuất vé</Col>
  //     <Col md={4} className='ticketmn_col'>Cổng Check-In</Col>
  //   </Row>
  //     </div >
  // <div className="ticketmn_pages">
  //   <Pagination defaultCurrent={1} total={200} showSizeChanger={false} className='pagination' />
  // </div>