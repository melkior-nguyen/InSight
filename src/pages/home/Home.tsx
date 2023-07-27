import React, { useState, useEffect, useRef } from 'react'
import './home.css'
import { DatePicker, DatePickerProps } from 'antd'
import LineChart from './Chart/LineChart'
import dayjs, { Dayjs } from 'dayjs'
import { useAppDispatch } from '../../hook'
import { addEventTickets, addFamillyTickets, fetchEventTickets, fetchFamillyTickets } from '../../redux/ticketslice'
import DoughnutChart from './Chart/DoughnutChart'


export type weekListType = {
  startOfWeek: Dayjs,
  endOfWeek: Dayjs
}

function Home() {
  const currMonth = '2023-07'
  const [searchMonth1, setSearchMonth1] = useState<string>(currMonth)
  const [searchMonth2, setSearchMonth2] = useState<string>(currMonth)
  const [weekList, setWeekList] = useState<weekListType[]>([])
  const [total, setTotal] = useState<number>(0)

  const dispatch = useAppDispatch()

  useEffect(() => {
    handleWeekList(searchMonth1)
  }, [])

  useEffect(() => {
    dispatch(fetchFamillyTickets())
    dispatch(fetchEventTickets())
  }, [])

  // handle search month
  const handleSearchMonth1: DatePickerProps['onChange'] = (date: Dayjs | null, dateString: string) => {
    handleWeekList(dateString)
  }
  const handleSearchMonth2: DatePickerProps['onChange'] = (date: Dayjs | null, dateString: string) => {
    setSearchMonth2(dateString)
  }

  //handle Week List
  const handleWeekList = (month: string) => {
    // lấy ngày đầu tiên và cuối tuần của tháng 
    const firstDayOfMonth = dayjs(month).startOf('month')
    const lastDayOfMonth = dayjs(month).endOf('month')

    // lấy ra ngày của thứ 2 trong tuần chứa ngày đầu tháng
    // và ngày của chủ nhật trong tuần chứa ngày cuối tháng
    const startDate = dayjs(firstDayOfMonth).startOf('week').add(1, 'day')
    const endDate = dayjs(lastDayOfMonth).endOf('week').add(1, 'day')

    // lặp qua các ngày từ đầu đến cuối tháng để lấy ra danh sách theo tuần
    const weeks = []
    let currDate = startDate
    for (let i = 0; i <= 6; i++) {
      //kiểm tra chủ nhật tuần hiện tại với ngày kết thúc
      if (currDate.subtract(1, 'days').format('DD/MM') === endDate.format('DD/MM')) break
      const startOfWeek = currDate
      const endOfWeek = currDate.add(6, 'days')
      //thêm vào weeks
      weeks.push({ startOfWeek: startOfWeek, endOfWeek: endOfWeek })

      // thứ 2 tuần tiếp theo
      currDate = currDate.add(7, 'days')
    }
    setWeekList(weeks)
  }



  return (
    <div className='home main_content'>
      <h2 className='content_header'>Thống Kê</h2>

      <div className="home_line-chart">
        <div className="line_chart-nav">
          <span>Doanh thu</span>
          <DatePicker picker='month' onChange={handleSearchMonth1} defaultValue={dayjs('2023-07', 'YYYY-MM')} />
        </div>
        <div className="line_chart-wrap">
          <LineChart weekList={weekList} setTotal={(data: number) => setTotal(data)} />
        </div>
        <div className="line_chart-revenue">
          <span>Tổng doanh thu theo tuần</span>
          <strong>{`${new Intl.NumberFormat('en-US').format(total)} Đồng`}</strong>
        </div>
      </div>

      <div className="home_doughnut-chart">
        <div className="doughnut_chart-nav">
          <DatePicker picker='month' onChange={handleSearchMonth2} defaultValue={dayjs('2023-07', 'YYYY-MM')} />
        </div>
        <div className="doughnut_chart-wrap">
          <DoughnutChart searchMonth={searchMonth2} />
        </div>

        <div className="doughnut_chart-note">
          <span>Vé đã sử dụng</span>
          <span>Vé chưa sử dụng</span>
        </div>

      </div>
    </div>
  )
}

export default Home

  // add doc


  // const handleFamAdd = () => {
  //   const dummyData1 = {
  //     code: `ALT23FAMI`,
  //     number: 500000 + Math.floor(Math.floor(Math.random() * 100000)),
  //     status: 200,
  //     date: '05/08/2023',
  //     date_buy: '05/08/2023',
  //     gate: 5,
  //     checked: true,
  //     type: 'familly',
  //     disable: false,
  //     price: 399000
  //   }
  //   const dummyData2 = {
  //     code: `ALT23EVENT`,
  //     number: 500000 + Math.floor(Math.floor(Math.random() * 100000)),
  //     status: 200,
  //     date: '05/08/2023',
  //     date_buy: '05/08/2023',
  //     gate: 5,
  //     checked: true,
  //     type: 'event',
  //     disable: false,
  //     price: 399000
  //   }
  //   dispatch(addFamillyTickets(dummyData1))
  //   dispatch(addEventTickets(dummyData2))

  // }