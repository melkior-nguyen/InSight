export type dataType = {
    id: number,
    code: string,
    number: number,
    status: number,
    date: string,
    date_buy: string,
    gate: number,
    checked: boolean,
    type: string

}

let ranNum: number
export const testFamillyData: dataType[] = [
    {
        id: 1,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'familly'
    },
    {
        id: 2,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'familly'
    },
    {
        id: 3,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true,
        type: 'familly'
    },
    {
        id: 4,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true,
        type: 'familly'
    },
    {
        id: 5,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false,
        type: 'familly'
    },
    {
        id: 6,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false,
        type: 'familly'
    },
    {
        id: 7,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true,
        type: 'familly'
    },
    {
        id: 8,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'familly'
    },
    {
        id: 9,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'familly'
    },
    {
        id: 10,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'familly'
    },
    {
        id: 11,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false,
        type: 'familly'
    },
    {
        id: 12,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'familly'
    },
    {
        id: 13,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: true,
        type: 'familly'
    },
    {
        id: 14,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: true,
        type: 'familly'
    },
    {
        id: 15,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: false,
        type: 'familly'
    },
    {
        id: 16,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: false,
        type: 'familly'
    },
    {
        id: 17,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'familly'
    },
    {
        id: 18,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'familly'
    }
]

export const testEventData: dataType[] = [
    {
        id: 1,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'event'
    },
    {
        id: 2,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'event'
    },
    {
        id: 3,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true,
        type: 'event'
    },
    {
        id: 4,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true,
        type: 'event'
    },
    {
        id: 5,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false,
        type: 'event'
    },
    {
        id: 6,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false,
        type: 'event'
    },
    {
        id: 7,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: true,
        type: 'event'
    },
    {
        id: 8,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'event'
    },
    {
        id: 9,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'event'
    },
    {
        id: 10,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'event'
    },
    {
        id: 11,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: false,
        type: 'event'
    },
    {
        id: 12,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'event'
    },
    {
        id: 13,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 200,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: true,
        type: 'event'
    },
    {
        id: 14,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: true,
        type: 'event'
    },
    {
        id: 15,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: false,
        type: 'event'
    },
    {
        id: 16,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 2,
        checked: false,
        type: 'event'
    },
    {
        id: 17,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 300,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 1,
        checked: true,
        type: 'event'
    },
    {
        id: 18,
        code: `HD3X${ranNum = Math.floor(Math.random() * 1000)}KOP`,
        number: 5421987455 + Math.floor(Math.floor(Math.random() * 1000)),
        status: 404,
        date: '14/04/2023',
        date_buy: '13/04/2023',
        gate: 3,
        checked: false,
        type: 'event'
    }
]