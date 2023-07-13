export type dataType = {
    id: number,
    code: string,
    number: number,
    status: number,
    date: string,
    date_buy: string,
    gate: number,
    checked: boolean
  }

let ranNum: number
export const testData: dataType[] = [
    {
        id: 1,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true
    },
    {
        id: 2,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true
    },
    {
        id: 3,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true
    },
    {
        id: 4,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true
    },
    {
        id: 5,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false
    },
    {
        id: 6,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false
    },
    {
        id: 7,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true
    },
    {
        id: 8,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false
    },
    {
        id: 9,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false
    },
    {
        id: 10,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false
    },
    {
        id: 11,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false
    },
    {
        id: 12,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true
    },
    {
        id: 13,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: true
    },
    {
        id: 14,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: true
    },
    {
        id: 15,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: false
    },
    {
        id: 16,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: false
    },
    {
        id: 17,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true
    },
    {
        id: 18,
        code: `HD3X${ranNum = Math.floor(Math.random()*1000)}KOP`,
        number : 5421987455 + Math.floor(Math.floor(Math.random()*1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false
    }
]