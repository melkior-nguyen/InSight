import React, { useState, useEffect } from 'react'
import './setting.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Search } from '../../components'
import { FiFilter, FiEdit } from 'react-icons/fi'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { GoDotFill } from 'react-icons/go'
import Update from './Update'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchPackManager } from '../../redux/ticketslice'
import Add from './Add'

type dataType = {
  code: string,
  name: string,
  date_buy: string,
  date: string,
  price: string,
  comboPrice: string,
  quantity: string
  status: boolean
}
function Setting() {
  const [updateLayout, setUpdateLayout] = useState<boolean>(false)
  const [indexUpdate, setIndexUpdate] = useState<number>(0)
  const [addLayout, setAddLayout] = useState<boolean>(false)

  // get pack list from firestore
  const packList = useAppSelector(state => state.tickets.packManager)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPackManager())
  }, [dispatch])

  const columns: ColumnsType<dataType> = [
    {
      key: 'index',
      title: 'STT',
      render: (value): any => {
        return packList.indexOf(value) + 1
      }
    },
    {
      key: 'name',
      title: 'Tên gói vé',
      dataIndex: 'name',
    },
    {
      key: 'date_buy',
      title: 'Ngày áp dụng',
      dataIndex: 'date_buy',
    },
    {
      key: 'date',
      title: 'Ngày hết hạn',
      dataIndex: 'date',
    },
    {
      key: 'price',
      title: 'Giá vé (VND/Vé)',
      dataIndex: 'price',
      render: (value) => {
        if (value !== '') {
          const valueArr = value.split('')
          if (valueArr.length <= 3) {
            return `${value} VND`
          } else {
            valueArr.splice((valueArr.length - 3), 0, '.')
            const renderValue = valueArr.join('')
            return `${renderValue} VND`
          }
        }
      }
    },
    {
      key: 'comboPrice',
      title: 'Giá Combo (VND/Combo)',
      dataIndex: 'comboPrice',
      render: (value, record, index) => {
        if (value !== '') {
          const valueArr = value.split('')
          if (valueArr.length <= 3) {
            return `${value} VND / ${packList[index].quantity} vé`
          } else {
            valueArr.splice((valueArr.length - 3), 0, '.')
            const renderValue = valueArr.join('')
            return `${renderValue} VND / ${packList[index].quantity} vé`
          }
        }
      }
    },
    {
      key: 'status',
      title: 'Tình trạng',
      dataIndex: 'status',
      render: (value): any => {
        if (value) return (
          <div className='status not_used'>
            <GoDotFill />
            <span>Đang áp dụng</span>
          </div>)

        return (
          <div className='status expired'>
            <GoDotFill />
            <span>Tắt</span>
          </div>)
      }
    },
    {
      key: 'update',
      title: '',
      render: (value, record, index) => {
        return <button className='setting_update-btn' onClick={() => handleUpdateBtn(index)}><FiEdit />Cập nhật</button>
      },
    },
  ]

  const handleUpdateBtn = (index: number) => {
    setUpdateLayout(true)
    setIndexUpdate(index)
  }
  return (
    <div className='setting main_content'>
      <h2 className='content_header'>Danh Sách Gói Vé</h2>

      <div className="content_nav ticketmn_nav">
        <Search plholder='Tìm bằng số vé' icon={<AiOutlineSearch />} />
        <div className="content_nav-option">
          <button className="content_nav-filter">
            Xuất file (.csv)
          </button>
          <button className="content_nav-check" onClick={() => setAddLayout(true)}>
            Thêm gói vé
          </button>
        </div>
      </div>

      <div className="setting_content">
        <Table
          columns={columns}
          dataSource={packList}
          pagination={{ pageSize: 9, showSizeChanger: false }}
        />
      </div>

      {addLayout && <Add handleAddClose={()=> setAddLayout(false)}/>}


      {updateLayout && <Update
        handleUpdateClose={() => setUpdateLayout(false)}
        updateData={packList[indexUpdate]}
        index={indexUpdate}
      />}

    </div>
  )
}

export default Setting






// setUpdateData = {(data:any)=> setPackData(prev=> {
//   const newUpdateData = [...prev]
//   newUpdateData[indexUpdate] = data
//   return newUpdateData
// })}















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