import React, { useState } from 'react'
import './pack.css'
import './familly.css'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { testFamillyData, dataType } from '../../testdata'
import { GoDotFill } from 'react-icons/go'
import { current } from '@reduxjs/toolkit'


function Familly({numberSearch}:{numberSearch:string}) {

  const columns: ColumnsType<dataType> = [
    {
      key: 'index',
      title: 'STT',
      render: (value, record, index): any => {
        return testFamillyData.indexOf(value) +1
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
      render: (gate: number): string => {
        if (gate === 1) return 'Cổng 1'
        if (gate === 2) return 'Cổng 2'
        if (gate === 3) return 'Cổng 3'
        return '_'
      }
    },
  ]


  return (
    <div className='ticketmn_pack'>
      <Table
        columns={columns}
        dataSource={testFamillyData}
        pagination={{ pageSize: 9 }} />
    </div>
  )
}

export default Familly
