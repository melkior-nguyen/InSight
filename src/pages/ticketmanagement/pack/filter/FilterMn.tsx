import React, { useState } from 'react'
import './filtermn.css'
import { AiOutlineClose } from 'react-icons/ai'
import { DatePicker } from 'antd'

function FilterMn({ handleCloseBtn, handleFilterInfo }: any) {
    const [statusRadio, setStatusRadio] = useState<string>('all')
    const [gateCheckbox, setGateCheckbox] = useState<string[]>(['all'])
    const [dateStart, setDateStart] = useState<string>('')
    const [dateEnd, setDateEnd] = useState<string>('')


    const handleStatusRadio = (status: string) => {
        if (status === 'all') setStatusRadio('all')
        if (status === 'used') setStatusRadio('used')
        if (status === 'not_used') setStatusRadio('not_used')
        if (status === 'expired') setStatusRadio('expired')
    }
    const handleGateCheckbox = (gate: string) => {
        if (gate === 'gate_1' ||
            gate === 'gate_2' ||
            gate === 'gate_3' ||
            gate === 'gate_4' ||
            gate === 'gate_5') {

            // set checkbox toggle on Click
            if (gateCheckbox.includes(gate)) {
                gateCheckbox.splice((gateCheckbox.indexOf(gate)), 1)
                // if no checkbox checked: set checkbox === 'all'
                gateCheckbox.length === 0 ? setGateCheckbox(['all']) : setGateCheckbox([...gateCheckbox])
            } else {
                // clear checkbox 'all' first
                if (gateCheckbox.includes('all')) {
                    gateCheckbox.splice((gateCheckbox.indexOf('all')), 1)
                }
                gateCheckbox.push(gate)
                // if all checkbox checked: set checkbox === 'all'
                gateCheckbox.length === 5 ? setGateCheckbox(['all']) : setGateCheckbox([...gateCheckbox])
            }
        }
        if (gate === 'all') {
            setGateCheckbox(['all'])
        }
    }

    const handleDateStart = (date: any, dateString: string) => {
        setDateStart(dateString)
    }
    const handleDateEnd = (date: any, dateString: string) => {
        setDateEnd(dateString)
    }
    const handleFilterSubmit = (e: any) => {
        e.preventDefault()
        const filterData = {
            rangeDate: [dateStart, dateEnd],
            status: statusRadio,
            gates: gateCheckbox
        }
        handleFilterInfo(filterData)
        handleCloseBtn()
    }


    return (
        <div className='ticketmn_filter'>
            <div className="ticketmn_filter-wrap">
                <button onClick={handleCloseBtn} className='ticketmn_filter-close'><AiOutlineClose /></button>
                <h3>Lọc vé</h3>
                <form className='ticketmn_filter-form' onSubmit={(e) => { handleFilterSubmit(e) }}>
                    <div className="ticketmn_filter-range">
                        <div className="ticketmn_filter-range-item">
                            <span className='ticketmn_filter-span'>Từ ngày</span>
                            <DatePicker placeholder='Chọn ngày' onChange={handleDateStart} />
                        </div>
                        <div className="ticketmn_filter-range-item">
                            <span className='ticketmn_filter-span'>Đến ngày</span>
                            <DatePicker placeholder='Chọn ngày' onChange={handleDateEnd} />
                        </div>
                    </div>
                    <div className="ticketmn_filter-status">
                        <span className='ticketmn_filter-span'>Trạng thái sử dụng</span>
                        <div className="ticketmn_filter-status-list">
                            <label htmlFor="" className='ticketmn_filter-status-radio' onClick={() => handleStatusRadio('all')}>
                                <input type="radio" value='all' checked={statusRadio === 'all'} />
                                Tất cả
                            </label>
                            <label htmlFor="" className='ticketmn_filter-status-radio' onClick={() => handleStatusRadio('used')}>
                                <input type="radio" value='used' checked={statusRadio === 'used'} />
                                Đã sử dụng
                            </label>
                            <label htmlFor="" className='ticketmn_filter-status-radio' onClick={() => handleStatusRadio('not_used')}>
                                <input type="radio" value='not_used' checked={statusRadio === 'not_used'} />
                                Chưa sử dụng
                            </label>
                            <label htmlFor="" className='ticketmn_filter-status-radio' onClick={() => handleStatusRadio('expired')}>
                                <input type="radio" value='exprired' checked={statusRadio === 'expired'} />
                                Hết hạn
                            </label>
                        </div>
                    </div>
                    <div className="ticketmn_filter-gate">
                        <span className='ticketmn_filter-span'>Cổng Check-In</span>
                        <div className="ticketmn_filter-gate-list">
                            <label htmlFor="" className='ticketmn_filter-gate-radio' onClick={() => handleGateCheckbox('all')}>
                                <input type='checkbox' value='all' checked={gateCheckbox.includes('all')} />
                                Tất cả
                            </label>
                            <label htmlFor="" className='ticketmn_filter-gate-radio' onClick={() => handleGateCheckbox('gate_1')}>
                                <input type='checkbox' value='gate_1' checked={gateCheckbox.includes('gate_1')} />
                                Cổng 1
                            </label>
                            <label htmlFor="" className='ticketmn_filter-gate-radio' onClick={() => handleGateCheckbox('gate_2')}>
                                <input type='checkbox' value='gate_2' checked={gateCheckbox.includes('gate_2')} />
                                Cổng 2
                            </label>
                            <label htmlFor="" className='ticketmn_filter-gate-radio' onClick={() => handleGateCheckbox('gate_3')}>
                                <input type='checkbox' value='gate_3' checked={gateCheckbox.includes('gate_3')} />
                                Cổng 3
                            </label>
                            <label htmlFor="" className='ticketmn_filter-gate-radio' onClick={() => handleGateCheckbox('gate_4')}>
                                <input type='checkbox' value='gate_4' checked={gateCheckbox.includes('gate_4')} />
                                Cổng 4
                            </label>
                            <label htmlFor="" className='ticketmn_filter-gate-radio' onClick={() => handleGateCheckbox('gate_5')}>
                                <input type='checkbox' value='gate_5' checked={gateCheckbox.includes('gate_5')} />
                                Cổng 5
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='ticketmn_filter-btn'>Lọc</button>
                </form>
            </div>
        </div>
    )
}

export default FilterMn
