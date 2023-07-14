import React, { useState } from 'react'
import './ticketmn.css'
import { Search } from '../../components'
import Familly from './Familly'
import Event from './Event'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'

function TicketMn() {
  const [pack, setPack] = useState<string>('familly')
  const [activedPack, setActivedPack] = useState<string>('familly')
  const [numberSearch, setNumberSearch] = useState<string>('')
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
          <button className="content_nav-filter">
            <FiFilter />
            Lọc vé
          </button>
          <button className="content_nav-export">
            {'Xuất file (.csv)'}
          </button>
        </div>
      </div>

      {pack === 'familly' && <Familly numberSearch={numberSearch} />}
      {pack === 'event' && <Event numberSearch={numberSearch} />}
    </div>
  )
}

export default TicketMn
