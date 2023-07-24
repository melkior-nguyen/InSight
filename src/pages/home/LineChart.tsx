import React, { useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import dayjs, { Dayjs } from 'dayjs';
import { weekListType } from './Home';
import { useAppSelector } from '../../hook';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Filler, ArcElement, Tooltip, Legend)

const createGradient = () => {
  const ctx = document.createElement('canvas').getContext('2d')
  if (!ctx) return
  const gradient = ctx.createLinearGradient(0, 0, 0, 300)
  gradient.addColorStop(0, 'rgba(250, 160, 95)')
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

  return gradient
}

type lineDataType = {
  labels: string[],
  datasets: {
    label: string,
    data: number[],
    fill: boolean,
    borderColor: string,
    backgroundColor: CanvasGradient | undefined,
    pointBorderColor: string,
    pointBackgroundColor: string,
    tension: number,
  }[]
}

const LineChart = ({ weekList, setTotal }: { weekList: weekListType[], setTotal: any }) => {
  const famillyTicket = useAppSelector(state => state.tickets.ticketsFamillyList)
  const EventTicket = useAppSelector(state => state.tickets.ticketsEventList)

  // danh sách vé theo từng tuần
  const ticketList = weekList.map(week => {
    // vé của gói familly
    const famillyTicketsOfWeek = famillyTicket.filter(ticket => {
      return (dayjs(ticket.date, 'DD/MM/YYYY') < week.endOfWeek
        && dayjs(ticket.date, 'DD/MM/YYYY') > week.startOfWeek)
    })
    // vé của gói event
    const eventTicketsOfWeek = EventTicket.filter(ticket => {
      return (dayjs(ticket.date, 'DD/MM/YYYY') < week.endOfWeek
        && dayjs(ticket.date, 'DD/MM/YYYY') > week.startOfWeek)
    })
    //vé theo tuần của cả 2 gói
    const ticketsOfWeek = [...famillyTicketsOfWeek, ...eventTicketsOfWeek]
    return ticketsOfWeek
  })

  // tổng tiền vé theo từng tuần
  const priceOnWeek: number[] = ticketList.map(data => {
    return data.reduce((init, curr) => {
      return init += curr.price
    }, 0)
  })

  // Tổng doanh thu theo tháng
  const priceOnMonth = priceOnWeek.reduce((init, curr) => init += curr, 0)
  setTotal(priceOnMonth)

  const data: lineDataType = {
    labels: weekList.map(week => {
      return `${week.startOfWeek.format('DD/MM')}-${week.endOfWeek.format('DD/MM')}`
    }),
    datasets: [
      {
        label: 'Doanh thu',
        data: priceOnWeek,
        fill: true,
        borderColor: '#FF993C',
        backgroundColor: createGradient(),
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        tension: 0.5,
      }
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Tắt lưới dọc (trục y)
          color: 'red',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.01)',
        },
        beginAtZero: true
      },
    },
    plugins: {
      legend: {
        display: false, // tắt label
      },
    },
  };
  return <Line data={data} options={options} height='60%' />
};

export default LineChart;

