import React from 'react'
import './pack.css'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { testEventData, dataType } from '../../testdata'

function Event() {
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
      key: 'type',
      title: 'Tên Sự Kiện',
      dataIndex: 'type',
      render :(type):any=>{
        if(type) return 'Hội chợ triễn lãm tiêu dùng 2023'
      }
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
        dataSource={testEventData}
        pagination={{ pageSize: 6 }} />
    </div>
  )
}

export default Event
