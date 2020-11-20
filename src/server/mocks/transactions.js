import transitions from '@material-ui/core/styles/transitions'
import  { v4 as uuid } from 'uuid'
import { BT_WIFI, E_ON, NATIONWIDE_BS, THAMES_WATER } from '../constants/merchants'

export const income = [
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 May 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 Jun 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 Jul 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 Aug 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 Sept 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 Oct 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('01 Nov 2020 00:00:00 GMT'),
    amount: 3000,
    credit: true,
    ...NATIONWIDE_BS
  }
]

const waterBill = [
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 May 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 Jun 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 Jul 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 Aug 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 Sept 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 Oct 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('05 Nov 2020 00:00:00 GMT'),
    amount: 30,
    credit: false,
    ...THAMES_WATER
  }
]

const internetBill = [
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 May 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 Jun 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 Jul 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 Aug 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 Sept 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 Oct 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('08 Nov 2020 00:00:00 GMT'),
    amount: 50,
    credit: false,
    ...BT_WIFI
  }
]

const energyBill = [
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 May 2020 00:00:00 GMT'),
    amount: 70,
    credit: false,
    ...E_ON
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 Jun 2020 00:00:00 GMT'),
    amount: 70,
    credit: false,
    ...E_ON
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 Jul 2020 00:00:00 GMT'),
    amount: 70,
    credit: false,
    ...E_ON
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 Aug 2020 00:00:00 GMT'),
    amount: 70,
    credit: false,
    ...E_ON
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 Sept 2020 00:00:00 GMT'),
    amount: 70,
    credit: false,
    ...E_ON
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 Oct 2020 00:00:00 GMT'),
    amount: 70,
    credit: false,
    ...E_ON
  },
  {
    customerId: 'mocked-cx-id',
    transactionId: uuid(),
    description: '',
    date: Date.parse('15 Nov 2020 00:00:00 GMT'),
    amount: 90,
    credit: false,
    ...E_ON
  }
]



const transactions = [
  ...income,
  ...waterBill,
  ...internetBill,
  ...energyBill
]

const getTransactions = () => {
  let prevBalance = 0
  return transactions.sort((a, b) => a.date - b.date).map((transaction, index, txArray) => {
    const { credit, amount } = transaction
    const balance = credit ? prevBalance + amount : prevBalance - amount
    prevBalance = balance
    return {
      ...transaction,
      balance
    }
  })
}

export default getTransactions()