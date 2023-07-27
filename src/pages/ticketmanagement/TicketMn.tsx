import React, { useState } from 'react'
import './ticketmn.css'
import { Search } from '../../components'
import Familly from './pack/FamillyMn'
import Event from './pack/EventMn'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'
import FilterMn from './pack/filter/FilterMn'

function TicketMn() {
  const [pack, setPack] = useState<string>('familly')
  const [filterLayout, setFilterLayout] = useState<boolean>(false)
  const [activedPack, setActivedPack] = useState<string>('familly')
  const [numberSearch, setNumberSearch] = useState<string>('')
  //filter information
  const [filterInfo, setFilterInfo] = useState<{ rangeDate: string[], status: string, gates: string[] }>({ rangeDate: ['', ''], status: 'all', gates: ['all'] })
  //Toggle pack function
  const handlePack = (pack: string) => {
    if (pack === 'familly') {
      setPack('familly')
      setActivedPack('familly')
    }
    if (pack === 'event') {
      setPack('event')
      setActivedPack('event')
    }
  }

  return (
    <div className='main_content ticketmn'>
      <h2 className='content_header'>Danh Sách Vé</h2>

      <div className="ticketmn_pack-options">
        <span
          className={activedPack === 'familly' ? 'ticketmn_pack-option actived' : 'ticketmn_pack-option'}
          onClick={() => handlePack('familly')}>
          Gói Gia Đình
        </span>
        <span
          className={activedPack === 'event' ? 'ticketmn_pack-option actived' : 'ticketmn_pack-option'}
          onClick={() => handlePack('event')}>
          Gói Sự Kiện
        </span>
      </div>

      <div className="content_nav ticketmn_nav">
        <Search plholder='Tìm bằng số vé' icon={<AiOutlineSearch />} OnChange={(inputData: string) => setNumberSearch(inputData)} />
        <div className="content_nav-option">
          <button className="content_nav-filter" onClick={() => setFilterLayout(true)}>
            <FiFilter />
            Lọc vé
          </button>
          <button className="content_nav-export">
            {'Xuất file (.csv)'}
          </button>
        </div>
      </div>

      {filterLayout && <FilterMn handleCloseBtn={() => { setFilterLayout(false) }} handleFilterInfo={(data: { rangeDate: string[], status: string, gates: string[] }) => { setFilterInfo(data) }} />}
      {pack === 'familly' && <Familly numberSearch={numberSearch} filterInfo={filterInfo} />}
      {pack === 'event' && <Event numberSearch={numberSearch} filterInfo={filterInfo} />}


    </div>
  )
}

export default TicketMn
