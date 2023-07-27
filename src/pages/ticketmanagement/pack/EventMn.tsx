import React, { useEffect } from 'react'
import './packmn.css'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { dataType } from '../../../testdata'
import { GoDotFill } from 'react-icons/go'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { fetchEventTickets } from '../../../redux/ticketslice'

function Event({ numberSearch, filterInfo }: any) {
  const eventData = useAppSelector(state => state.tickets.ticketsEventList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchEventTickets())
  }, [dispatch])

  const columns: ColumnsType<dataType> = [
    {
      key: 'index',
      title: 'STT',
      render: (text, record): any => {
        return eventData.indexOf(record) + 1
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
      },
      filteredValue: [filterInfo.status],
      onFilter: (value, record): any => {
        if (value === 'all') return record.status
        if (value === 'used') return record.status === 200
        if (value === 'not_used') return record.status === 300
        if (value === 'expired') return record.status === 404
      }
    },
    {
      key: 'date',
      title: 'Ngày sử dụng',
      dataIndex: 'date',
      filteredValue: [filterInfo.rangeDate],
      onFilter: (value, record): any => {
        const rangeArr = value.toString().split(',') //[yyyy-mm-dd, yyyy-mm-dd]

        const dateArr = record.date.split('/') // [dd,mm,yyyy]
        const convertDate = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}` // yyyy-mm-dd

        //incase no set filter
        if (value == 'undefined' || rangeArr[0] === '' && rangeArr[1] === '') return record.date
        //filter with range date
        if (convertDate <= rangeArr[1] && convertDate >= rangeArr[0]) return record.date
      }
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
        if (gate === 4) return 'Cổng 4'
        if (gate === 5) return 'Cổng 5'
        return '_'
      },
      filteredValue: [filterInfo.gates],
      onFilter: (value, record): any => {
        if (value.toString().indexOf('all') !== -1) return record.gate

        const gateArr = []
        if (value.toString().indexOf('gate_1') !== -1) gateArr.push(1)
        if (value.toString().indexOf('gate_2') !== -1) gateArr.push(2)
        if (value.toString().indexOf('gate_3') !== -1) gateArr.push(3)
        if (value.toString().indexOf('gate_4') !== -1) gateArr.push(4)
        if (value.toString().indexOf('gate_5') !== -1) gateArr.push(5)
        return gateArr.includes(record.gate)
      }
    },
  ]

  return (
    <div className='ticketmn_pack'>
      <Table
        columns={columns}
        dataSource={eventData}
        pagination={{ pageSize: 9, showSizeChanger: false }} />
    </div>
  )
}

export default Event
