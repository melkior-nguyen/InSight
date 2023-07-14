import React from 'react'
import './pack.css'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { testEventData, dataType } from '../../testdata'
import { GoDotFill } from 'react-icons/go'

function Event({numberSearch}:{numberSearch:string}) {
  const columns: ColumnsType<dataType> = [
    {
      key: 'index',
      title: 'STT',
      render: (text, record): any => {
        return testEventData.indexOf(record) +1
      }
    },
    {
      key: 'code',
      title: 'Booking Code',
      dataIndex: 'code'
    },
    {
      key: 'number',
      title: 'Số vé',
      dataIndex: 'number',
      filteredValue: [numberSearch],
      onFilter: (value, record): any => {
        if (value !== '') {
          return record.number.toString().indexOf(value.toString()) !== -1
        }
        else return record.number
      }
    },
    {
      key: 'type',
      title: 'Tên Sự Kiện',
      dataIndex: 'type',
      render: (type): any => {
        if (type) return 'Hội chợ triển lãm tiêu dùng 2023'
      }
    },
    {
      key: 'status',
      title: 'Tình trạng sử dụng',
      dataIndex: 'status',
      render: (status: number): any => {
        if (status === 200) {
          return (<div className='status used'>
            <GoDotFill />
            <span>Đã sử dụng</span>
          </div>)
        }
        else if (status === 404) {
          return (<div className='status expired'>
            <GoDotFill />
            <span>Hết Hạn</span>
          </div>)
        }
        else if (status === 300) {
          return (<div className='status not_used'>
            <GoDotFill />
            <span>Chưa sử dụng</span>
          </div>)
        }
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
        pagination={{ pageSize: 9 }} />
    </div>
  )
}

export default Event
