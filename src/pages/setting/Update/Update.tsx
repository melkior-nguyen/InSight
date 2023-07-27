import React, { useState } from 'react'
import './update.css'
import { DatePicker, TimePicker } from 'antd'
import { Dayjs } from 'dayjs'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { updatePackManager } from '../../../redux/ticketslice'

type updateType = {
    code: string,
    name: string,
    date_buy: string,
    date: string,
    price: string,
    comboPrice: string,
    quantity: string,
    status: boolean
}

function Update({ handleUpdateClose, updateData, index }: any) {
    //set anitial value for don't get error
    const [updatedInfo, setUpdatedInfo] = useState<updateType>(updateData || {
        code: '',
        name: '',
        date_buy: '',
        date: '',
        price: '',
        comboPrice: '',
        quantity: 0,
        status: true
    })

    const [dateTime, setDateTime] = useState<Dayjs | null>(null)
    const [dateBuyTime, setDateBuyTime] = useState<Dayjs | null>(null)
    const [priceCheckbox, setPriceCheckbox] = useState<boolean>(true)
    const [comboPriceCheckbox, setComboPriceCheckbox] = useState<boolean>(true)

    const packList = useAppSelector(state => state.tickets.packManager)
    const dispatch = useAppDispatch()

    // handle time
    const handleDateBuyTime = (time: Dayjs | null) => setDateBuyTime(time)
    const handleDateTime = (time: Dayjs | null) => setDateTime(time)

    //handle submit
    const handleUpdateSubmit = (e: any) => {
        e.preventDefault()

        // check date
        if (updatedInfo.date && updatedInfo.date_buy) {
            if (updatedInfo.date < updatedInfo.date_buy) {
                alert('Ngày hết hạn phải sau ngày áp dụng!')
                return
            }
        }
        // check time
        if (updatedInfo.date === updatedInfo.date_buy) {
            if (dateTime && dateBuyTime) {
                if (dateTime.isBefore(dateBuyTime)) {
                    alert('Thời gian hết hạn phải sau thời gian áp dụng trong cùng một ngày')
                    return
                }
            }
        }

        //yyyy-mm-dd => dd/mm/yyyy
        const newUpdatedInfo = { ...updatedInfo }
        if (updatedInfo.date.indexOf('-') !== -1) {
            const dateArr = updatedInfo.date.split('-')
            const renderDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`

            newUpdatedInfo.date = renderDate

        }
        if (updatedInfo.date_buy.indexOf('-') !== -1) {
            const dateBuyArr = updatedInfo.date_buy.split('-')
            const renderDateBuy = `${dateBuyArr[2]}/${dateBuyArr[1]}/${dateBuyArr[0]}`

            newUpdatedInfo.date_buy = renderDateBuy

        }

        //check box
        if (!priceCheckbox) newUpdatedInfo.price = ''
        if (!comboPriceCheckbox) {
            newUpdatedInfo.comboPrice = ''
            newUpdatedInfo.quantity = ''
        }
        // submit
        dispatch(updatePackManager({ ...newUpdatedInfo, index: index }))
        alert('Cập nhật thành công!')
        handleUpdateClose()
    }

    return (
        <div className='setting_update'>
            <form className="setting_update-form" onSubmit={(e) => handleUpdateSubmit(e)}>
                <h3>Cập nhật thông tin gói vé</h3>
                <div className="setting_update-info">
                    <div className="update_info-code">
                        <span className='update_span'>Mã sự kiện</span>
                        <input type="text" placeholder='ALTA2023FA' value={updatedInfo.code}
                            onChange={(e) => setUpdatedInfo(prevState => ({ ...prevState, code: e.target.value }))} />
                    </div>
                    <div className="update_info-name">
                        <span className='update_span'>Tên sự kiện</span>
                        <input type="text" placeholder='Gói...' value={updatedInfo.name}
                            onChange={(e) => setUpdatedInfo(prevState => ({ ...prevState, name: e.target.value }))} />
                    </div>
                </div>
                <div className="setting_update-date">
                    <div className="update_date-buy">
                        <span className='update_span'>Ngày áp dụng</span>
                        <div className="update_date-wrap">
                            <DatePicker onChange={(date, dateString) => setUpdatedInfo(prevState => ({ ...prevState, date_buy: dateString }))} />
                            <TimePicker value={dateBuyTime} onChange={handleDateBuyTime} />
                        </div>
                    </div>
                    <div className="update_date">
                        <span className='update_span'>Ngày hết hạn</span>
                        <div className="update_date-wrap">
                            <DatePicker onChange={(date, dateString) => setUpdatedInfo(prevState => ({ ...prevState, date: dateString }))} />
                            <TimePicker value={dateTime} onChange={handleDateTime} />
                        </div>
                    </div>
                </div>

                <div className="setting_update-price">
                    <span className='update_span'>Giá vé áp dụng</span>
                    <div className="update_price-wrap">
                        <input type="checkbox" checked={priceCheckbox} onChange={() => setPriceCheckbox(!priceCheckbox)} />
                        Vé lẻ (vnđ/vé) với giá
                        <input type="text" placeholder='Giá vé' value={updatedInfo.price}
                            onChange={(e) => setUpdatedInfo(prevState => ({ ...prevState, price: e.target.value }))} />
                        /vé
                    </div>
                    <div className="update_price-wrap">
                        <input type="checkbox" checked={comboPriceCheckbox} onChange={() => setComboPriceCheckbox(!comboPriceCheckbox)} />
                        Combo vé với giá
                        <input type="text" placeholder='Giá vé' value={updatedInfo.comboPrice}
                            onChange={(e) => setUpdatedInfo(prevState => ({ ...prevState, comboPrice: e.target.value }))} />
                        /
                        <input type="text" placeholder='Số vé' value={updatedInfo.quantity}
                            onChange={(e) => setUpdatedInfo(prevState => ({ ...prevState, quantity: e.target.value }))} />
                        vé
                    </div>
                </div>

                <div className="setting_update-status">
                    <span className='update_span'>Tình trạng</span>
                    <div className="update_status-select">
                        <select
                            onChange={(e) => e.target.value === 'on' ?
                                setUpdatedInfo(prevState => ({ ...prevState, status: true })) :
                                setUpdatedInfo(prevState => ({ ...prevState, status: false }))}>
                            {updateData.status === true ?
                                <>
                                    <option value="on">Đang áp dụng</option>
                                    <option value="off">Tắt</option>
                                </> :
                                <>
                                    <option value="off">Tắt</option>
                                    <option value="on">Đang áp dụng</option>
                                </>}

                        </select>
                    </div>
                </div>

                <div className="setting_update-note">
                    <span>*</span>
                    là thông tin bắt buộc
                </div>

                <div className="setting_update-btns">
                    <button className='content_nav-export' onClick={handleUpdateClose}>Hủy</button>
                    <button className='content_nav-check' type='submit'>Lưu</button>
                </div>
            </form>
        </div>
    )
}

export default Update
