import React, { ChangeEvent, useState } from 'react'
import './ticketadd.css'
import { DatePicker } from 'antd'
import { dataType } from '../../testdata'
import dayjs, { Dayjs } from 'dayjs'
import { useDispatch } from 'react-redux'
import { addEventTickets, addFamillyTickets } from '../../redux/ticketslice'



function TicketAdd({ handleCloseAddTicket }: any) {
    const [newTicketInfo, setNewTicketInfo] = useState<dataType>({
        code: 'ALT23FAMI',
        number: 0,
        status: 300,
        date: dayjs().format('DD/MM/YYYY'),
        date_buy: dayjs().format('DD/MM/YYYY'),
        gate: 0,
        checked: false,
        type: 'familly',
        price: 399000,
        disable: false
    })

    const dispatch = useDispatch<any>()

    const handleTicketPack = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'familly') setNewTicketInfo(prev => ({ ...prev, code: 'ALT23FAMI', type: 'familly' }))
        if (e.target.value === 'event') setNewTicketInfo(prev => ({ ...prev, code: 'ALT23EVENT', type: 'event' }))
    }
    const handleTicketDate = (date: Dayjs | null) => {
        setNewTicketInfo(prev => ({ ...prev, date: dayjs(date).format('DD/MM/YYYY') }))
    }

    const handleTicketGate = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value !== '') {
            setNewTicketInfo(prev => ({ ...prev, gate: Number(e.target.value) }))
            setNewTicketInfo(prev => ({ ...prev, number: 500000 + Math.floor(Math.floor(Math.random() * 100000)) }))
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (newTicketInfo.gate === 0) {
            alert('Vui lòng chọn cổng')
            return
        }
        const data = { ...newTicketInfo }
        if (data.code === 'ALT23FAMI') {
            dispatch(addFamillyTickets(newTicketInfo))
            alert('Thêm vé thành công')
            handleCloseAddTicket()
            return
        }
        if (data.code === 'ALT23EVENT') {
            dispatch(addEventTickets(newTicketInfo))
            alert('Thêm vé thành công')
            handleCloseAddTicket()
            return
        }
    }


    return (
        <div className='ticketadd'>
            <form className='ticketadd_form' onSubmit={(e) => handleSubmit(e)}>
                <h3>Thêm vé mới</h3>
                <div className="ticketadd_name">

                </div>
                <div className="ticketadd_select">
                    <span className='ticketadd_span'>Tên gói vé:</span>
                    <select name="filter" id="filter" onChange={(e) => handleTicketPack(e)}>
                        <option value="familly">Gia đình</option>
                        <option value="event">Sự kiện hội chợ triển lãm</option>
                    </select>
                </div>
                <div className="ticketadd_date">
                    <span className='ticketadd_span'>Ngày sử dụng:</span>
                    <DatePicker onChange={(date) => handleTicketDate(date)} defaultValue={dayjs()} />
                </div>
                <div className="ticketadd_gate">
                    <span className='ticketadd_span'>Cổng vào:</span>
                    <select onChange={(e) => handleTicketGate(e)}>
                        <option value="">Chọn Cổng</option>
                        <option value="1">Cổng 1</option>
                        <option value="2">Cổng 2</option>
                        <option value="3">Cổng 3</option>
                        <option value="4">Cổng 4</option>
                        <option value="5">Cổng 5</option>
                    </select>
                </div>
                <div className="ticketadd_code">
                    <span className='ticketadd_span'>Mã sự kiện:</span>
                    <span className='ticketadd_span'>{newTicketInfo.code}</span>
                </div>
                <div className="ticketadd_code">
                    <span className='ticketadd_span'>Mã code:</span>
                    <span className='ticketadd_span'>{newTicketInfo.number}</span>
                </div>
                <div className="ticketadd_price">
                    <span className='ticketadd_span'>Giá vé:</span>
                    <span className='ticketadd_span'>399,000đ</span>
                </div>
                <div className="ticketadd_btns" style={{ justifyContent: 'center' }}>
                    <button onClick={handleCloseAddTicket} className='content_nav-export' type='button'>Hủy</button>
                    <button className='content_nav-check' type='submit'>Xuất vé</button>
                </div>

            </form>
        </div>
    )
}

export default TicketAdd
