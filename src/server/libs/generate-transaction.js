import { v4 as uuid } from 'uuid'
import merchants from '../constants/merchants'

const generateRandomAmount = (max = 100, min = 1) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const generateTransactions = (customerId) => {
  const { merchant, category } = merchants[Math.floor(Math.random() * merchants.length)]
  const transaction = {
    customerId,
    transactionId: uuid(),
    amount: generateRandomAmount(100),
    date: Date.now(),
    description: '',
    category,
    merchant
  }

  return transaction
}

export default generateTransactions
