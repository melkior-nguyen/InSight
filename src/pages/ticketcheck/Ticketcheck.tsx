import React, { useState } from 'react'
import './ticketcheck.css'
import { Search } from '../../components'
import { AiOutlineSearch } from 'react-icons/ai'
import FamillyCheck from './FamillyCheck'
import EventCheck from './EventCheck'
import { DatePicker } from 'antd'


function Ticketcheck() {
  const [pack, setPack] = useState<string>('familly')
  const [numberSearch, setNumberSearch] = useState<string>('')

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'familly') {
      setPack('familly')
    }
    if (e.target.value === 'event') {
      setPack('event')
      console.log('event')
    }
  }


  return (
    <div className='ticketcheck main_content'>
      {/* ticketcheck table */}
      <div className="sub_content">
        <h2 className='content_header'>Đối Soát Vé</h2>
        <div className="content_nav">
          <Search plholder='Tìm bằng số vé' icon={<AiOutlineSearch />}  OnChange={(inputData: string) => setNumberSearch(inputData)}/>
          <div className="content_nav-option">
            <button className="content_nav-export">
              {'Xuất file (.csv)'}
            </button>
          </div>
        </div>

        {pack === 'familly' && <FamillyCheck numberSearch={numberSearch}/>}
        {pack === 'event' && <EventCheck numberSearch={numberSearch}/>}
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

        <form onSubmit={(e) => e.preventDefault()} className='ticketcheck_filter-form'>

          <div className="ticketcheck_filter-checked">
            <span className='ticketcheck_filter-span'>Tình trạng đối soát</span>
            <div className="ticketcheck_filter-radio">
              <label htmlFor='radio-all'>
                <input type="radio" value='all' name='ticketcheck_radio' id='radio-all'></input>
                Tất cả
              </label>
            </div>
            <div className="ticketcheck_filter-radio">
              <label htmlFor='radio-checked'>
                <input type="radio" value='checked' name='ticketcheck_radio' id='radio-checked' />
                Đã đối soát
              </label>
            </div>
            <div className="ticketcheck_filter-radio">
              <label htmlFor='radio-not_checked'>
                <input type="radio" value='not_checked' name='ticketcheck_radio' id='radio-not_checked' />
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
            <DatePicker className='ticketcheck_date'/>
          </div>

          <div className="ticketcheck_filter-to">
            <span className='ticketcheck_filter-span'>Đến ngày</span>
            <DatePicker className='ticketcheck_date'/>
          </div>
          <button type='submit' className='ticketcheck_filter-btn'>Lọc</button>
        </form>


      </div>
    </div>
  )
}

export default Ticketcheck
