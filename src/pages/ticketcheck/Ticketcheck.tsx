import React, { useState } from 'react'
import './ticketcheck.css'
import { Search } from '../../components'
import { AiOutlineSearch } from 'react-icons/ai'
import FamillyCheck from './pack/FamillyCheck'
import EventCheck from './pack/EventCheck'
import { DatePicker } from 'antd'


function Ticketcheck() {
  const [pack, setPack] = useState<string>('familly')
  const [numberSearch, setNumberSearch] = useState<string>('')
  const [checkRadio, setCheckRadio] = useState<string>('all')
  const [dateStart, setDateStart] = useState<string>('')
  const [dateEnd, setDateEnd] = useState<string>('')
  const [filterInfo, setFilterInfo] = useState<{ checked: string, rangeDate: string[] }>({ checked: 'all', rangeDate: ['', ''] })

  //handle pack toggle
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'familly') {
      setPack('familly')
    }
    if (e.target.value === 'event') {
      setPack('event')
      console.log('event')
    }
  }

  //handle check radio
  const handleCheckRadio = (check: string) => {
    if (check === 'all') setCheckRadio('all')
    if (check === 'checked') setCheckRadio('checked')
    if (check === 'not_checked') setCheckRadio('not_checked')
  }

  //handle date range
  const handleDateStart = (date: any, dateString: string) => {
    setDateStart(dateString)
  }
  const handleDateEnd = (date: any, dateString: string) => {
    setDateEnd(dateString)
  }

  //handle submit
  const handleFilterSubmit = (e: any) => {
    e.preventDefault()
    const filterInfo = {
      checked: checkRadio,
      rangeDate: [dateStart, dateEnd]
    }
    setFilterInfo(filterInfo)
  }

  return (
    <div className='ticketcheck main_content'>
      {/* ticketcheck table */}
      <div className="sub_content">
        <h2 className='content_header'>Đối Soát Vé</h2>
        <div className="content_nav">
          <Search plholder='Tìm bằng số vé' icon={<AiOutlineSearch />} OnChange={(inputData: string) => setNumberSearch(inputData)} />
          <div className="content_nav-option">
            {filterInfo.checked === 'not_checked' ?
              <button className="content_nav-check">
                {'Chốt đối soát'}
              </button> :
              <button className="content_nav-export">
                {'Xuất file (.csv)'}
              </button>
            }
          </div>
        </div>

        {pack === 'familly' && <FamillyCheck numberSearch={numberSearch} filterInfo={filterInfo} />}
        {pack === 'event' && <EventCheck numberSearch={numberSearch} filterInfo={filterInfo} />}
      </div>
      {/* filter */}
      <div className="sub_content ticketcheck-filter">
        <h3>Lọc vé</h3>
        <div className="ticketcheck_filter-select">
          <select name="filter" id="filter" onChange={(e) => handleSelect(e)}>
            <option value="familly">Gia đình</option>
            <option value="event">Sự kiện hội chợ triển lãm</option>
          </select>
        </div>

        <form onSubmit={(e) => handleFilterSubmit(e)} className='ticketcheck_filter-form'>

          <div className="ticketcheck_filter-checked">
            <span className='ticketcheck_filter-span'>Tình trạng đối soát</span>
            <div className="ticketcheck_filter-radio">
              <label htmlFor='radio-all'>
                <input type="radio" value='all' checked={checkRadio === 'all'} id='radio-all' onClick={() => handleCheckRadio('all')} />
                Tất cả
              </label>
            </div>
            <div className="ticketcheck_filter-radio">
              <label htmlFor='radio-checked'>
                <input type="radio" value='checked' checked={checkRadio === 'checked'} id='radio-checked' onClick={() => handleCheckRadio('checked')} />
                Đã đối soát
              </label>
            </div>
            <div className="ticketcheck_filter-radio">
              <label htmlFor='radio-not_checked'>
                <input type="radio" value='not_checked' checked={checkRadio === 'not_checked'} id='radio-not_checked' onClick={() => handleCheckRadio('not_checked')} />
                Chưa đối soát
              </label>
            </div>
          </div>

          <div className="ticketcheck_filter-type">
            <span className='ticketcheck_filter-span'>Loại vé</span>
            <span>Vé cổng</span>
          </div>

          <div className="ticketcheck_filter-from">
            <span className='ticketcheck_filter-span'>Từ ngày</span>
            <DatePicker className='ticketcheck_date' placeholder='Chọn ngày' onChange={handleDateStart} />
          </div>

          <div className="ticketcheck_filter-to">
            <span className='ticketcheck_filter-span'>Đến ngày</span>
            <DatePicker className='ticketcheck_date' placeholder='Chọn ngày' onChange={handleDateEnd} />
          </div>
          <button type='submit' className='ticketcheck_filter-btn'>Lọc</button>
        </form>


      </div>
    </div>
  )
}

export default Ticketcheck
