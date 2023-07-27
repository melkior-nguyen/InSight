import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useAppSelector } from '../../../hook'
import dayjs from 'dayjs'

function DoughnutChart({ searchMonth }: { searchMonth: string }) {
    const startOfMonth = dayjs(searchMonth, 'YYYY-MM').startOf('month')
    const endOfMonth = dayjs(searchMonth, 'YYYY-MM').endOf('month')
    const famillyTicket = useAppSelector(state => state.tickets.ticketsFamillyList)
    const eventTicket = useAppSelector(state => state.tickets.ticketsEventList)

    //danh sách vé theo tháng
    const famillyUsedOfMonth = famillyTicket.filter(ticket => {
        const date = dayjs(ticket.date_buy, 'DD/MM/YYYY')
        if (date < endOfMonth && date > startOfMonth) {
            return ticket.status === 200
        }
    })
    const famillyNotUsedOfMonth = famillyTicket.filter(ticket => {
        const date = dayjs(ticket.date_buy, 'DD/MM/YYYY')
        if (date < endOfMonth && date > startOfMonth) {
            return ticket.status === 300
        }
    })

    const eventUsedOfMonth = eventTicket.filter(ticket => {
        const date = dayjs(ticket.date_buy, 'DD/MM/YYYY')
        if (date < endOfMonth && date > startOfMonth) {
            return ticket.status === 200
        }
    })
    const eventNotUsedOfMonth = eventTicket.filter(ticket => {
        const date = dayjs(ticket.date_buy, 'DD/MM/YYYY')
        if (date < endOfMonth && date > startOfMonth) {
            return ticket.status === 300
        }
    })

    // số lượng vé theo tháng

    const famillyUsedQuantity = famillyUsedOfMonth.length
    const famillyNotUsedQuantity = famillyNotUsedOfMonth.length

    const eventUsedQuantity = eventUsedOfMonth.length
    const eventNotUsedQuantity = eventNotUsedOfMonth.length


    const famillyData = {
        labels: [],
        datasets: [
            {
                label: 'So ve',
                data: famillyUsedQuantity === 0 && famillyNotUsedQuantity === 0 ? [0, 1] : [famillyNotUsedQuantity, famillyUsedQuantity],
                backgroundColor: ['#FF8A48', '#4F75FF'],
                borderColor: ['#FF8A48', '#4F75FF'],
            }
        ]
    }
    const eventData = {
        labels: [],
        datasets: [
            {
                label: 'So ve',
                data: eventNotUsedQuantity === 0 && eventUsedQuantity === 0 ? [0, 1] : [eventNotUsedQuantity, eventUsedQuantity],
                backgroundColor: ['#FF8A48', '#4F75FF'],
                borderColor: ['#FF8A48', '#4F75FF'],
            }
        ]
    }


    return (
        <>
            <div className="doughnut_chart">
                <span>Gói gia đình</span>
                <Doughnut data={famillyData} />
            </div>
            <div className="doughnut_chart">
                <span>Gói sự kiện</span>
                <Doughnut data={eventData} />
            </div>
        </>
    )
}

export default DoughnutChart
