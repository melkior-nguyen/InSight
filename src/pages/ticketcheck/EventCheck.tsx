import React, { useEffect } from 'react'
import './packcheck.css'
import { Table } from 'antd'
import { testEventData, dataType } from '../../testdata'
import type { ColumnsType } from 'antd/es/table'
import { fetchEventTickets } from '../../redux/ticketslice'
import { useAppDispatch, useAppSelector } from '../../hook'

function EventCheck({ numberSearch, filterInfo }: any) {
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
        if (gate === 4) return 'Cổng 4'
        if (gate === 5) return 'Cổng 5'
        return '_'
      }
    },
    {
      key: 'check',
      title: '',
      dataIndex: 'checked',
      render: (checked): any => {
        if (checked) return <span style={{ color: '#FD5959' }}>Đã đối soát</span>
        else return <span style={{ color: '#A5A8B1' }}>Chưa đối soát</span>
      },
      filteredValue: [filterInfo.checked],
      onFilter: (value, record): any => {
        if (value === 'all') return record.checked === true || record.checked === false
        if (value === 'checked') return record.checked === true
        if (value === 'not_checked') return record.checked === false
      }
    },

  ]
  return (
    <div className='ticketcheck_pack'>
      <Table
        columns={columns}
        dataSource={eventData}
        pagination={{ pageSize: 10, showSizeChanger: false  }} />
    </div>
  )
}

export default EventCheck
