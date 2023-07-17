import React from 'react'
import './packcheck.css'
import { Table } from 'antd'
import { testEventData, dataType } from '../../testdata'
import type { ColumnsType } from 'antd/es/table'

function EventCheck({numberSearch}:{numberSearch:string}) {
  const columns: ColumnsType<dataType> = [
    {
      key: 'index',
      title: 'STT',
      render: (text, record): any => {
        return testEventData.indexOf(record) + 1
      }
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
        if (type) return 'Hội chợ triển lãm 2023'
      }
    },
    {
      key: 'date',
      title: 'Ngày sử dụng',
      dataIndex: 'date'
    },
    {
      key: 'gate',
      title: 'Tên loại vé',
      dataIndex: 'gate',
      render: (gate): any => {
        if (gate) return 'Vé cổng'
      }
    },
    {
      key: 'gate',
      title: 'Cổng Check - In',
      dataIndex: 'gate',
      render: (gate): any => {
        if (gate === 1) return 'Cổng 1'
        if (gate === 2) return 'Cổng 2'
        if (gate === 3) return 'Cổng 3'
        return '_'
      }
    },
    {
      key: 'check',
      title: '',
      dataIndex: 'checked',
      render: (checked): any => {
        if (checked) return 'Đã đối soát'
        else return 'Chưa đối soát'
      }
    },

  ]
  return (
    <div className='ticketcheck_pack'>
      <Table
        columns={columns}
        dataSource={testEventData}
        pagination={{ pageSize: 10 }} />
    </div>
  )
}

export default EventCheck
