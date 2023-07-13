import React from 'react'
import './ticketcheck.css'
import { Search } from '../../components'
import { AiOutlineSearch } from 'react-icons/ai'
import type { ColumnsType } from 'antd/es/table'
import { testFamillyData, dataType } from '../../testdata'
import Table from 'antd/es/table'


function Ticketcheck() {
  const columns: ColumnsType<dataType> = [
    {
      key: 'id',
      title: 'STT',
      dataIndex: 'id'
    },
    {
      key: 'number',
      title: 'Số vé',
      dataIndex: 'number'
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
    <div className='ticketcheck main_content'>
      <h2 className='content_header'>Đối Soát Vé</h2>

      <div className="content_nav ticketcheck_nav">
        <Search plholder='Tìm bằng số vé' icon={<AiOutlineSearch />} />
        <div className="ticketcheck_nav-option">
          <button className="ticketcheck_nav-export">
            {'Xuất file (.csv)'}
          </button>
        </div>
      </div>

      <div className='ticketcheck_pack'>
        <Table
          columns={columns}
          dataSource={testFamillyData}
          pagination={{ pageSize: 7 }} />
      </div>
    </div>
  )
}

export default Ticketcheck
