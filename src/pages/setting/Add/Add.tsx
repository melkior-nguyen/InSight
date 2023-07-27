import React from 'react'
import './add.css'
import { DatePicker, TimePicker } from 'antd'

function Add({ handleAddClose }: any) {
    return (
        <div className='setting_add'>
            <form className='setting_add-form' onSubmit={(e) => e.preventDefault()}>
                <h3>Thêm gói vé</h3>
                <div className="setting_add-info">
                    <div className="add_info-name">
                        <span className='add_span'>Tên Gói Vé</span>
                        <input type="text" placeholder='Gói...' />
                    </div>
                </div>
                <div className="setting_add-date">
                    <div className="add_date-buy">
                        <span className='add_span'>Ngày áp dụng</span>
                        <div className="add_date-wrap">
                            <DatePicker placeholder='Chọn ngày' />
                            <TimePicker placeholder='Chọn giờ' />
                        </div>
                    </div>
                    <div className="add_date">
                        <span className='add_span'>Ngày hết hạn</span>
                        <div className="add_date-wrap">
                            <DatePicker placeholder='Chọn ngày' />
                            <TimePicker placeholder='Chọn giờ' />
                        </div>
                    </div>
                </div>
                <div className="setting_add-price">
                    <span className='add_span'>Giá vé áp dụng</span>
                    <div className="add_price-wrap">
                        <input type="checkbox" />
                        Vé lẻ (vnđ/vé) với giá
                        <input type="text" placeholder='Giá vé' />
                        /vé
                    </div>
                    <div className="add_price-wrap">
                        <input type="checkbox" />
                        Combo vé với giá
                        <input type="text" placeholder='Giá vé' />
                        /
                        <input type="text" placeholder='Số vé' />
                        vé
                    </div>
                </div>
                <div className="setting_add-status">
                    <span className='add_span'>Tình trạng</span>
                    <div className="add_status-select">
                        <select>
                            <option value="on">Đang áp dụng</option>
                            <option value="off">Tắt</option>

                        </select>
                    </div>
                </div>
                <div className="setting_add-note">
                    <span>*</span>
                    là thông tin bắt buộc
                </div>
                <div className="setting_add-btns">
                    <button className='content_nav-export' onClick={handleAddClose}>Hủy</button>
                    <button className='content_nav-check' type='submit'>Lưu</button>
                </div>
            </form>
            add
        </div>
    )
}

export default Add
