import transactions from '../mocks/transactions'
import { generateMonthlyBalanceInsights } from './insights'

describe('getTransations' , () => {
  it('should get the transactions', () => {
    expect(generateMonthlyBalanceInsights(transactions)).toEqual([])
  })
})