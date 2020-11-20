import { groupBy } from 'ramda'
import moment from 'moment'

const groupByMonth = groupBy(({ date }) => moment(date).format('MM-YYYY'))

export const generateInsights = (transactions) => {

}

export const generateMonthlyBalanceInsights = (transactions) => {
  const monthlyTransactions = groupByMonth(transactions)
  const 
  return monthlyTransactions
}

const calculateTotal