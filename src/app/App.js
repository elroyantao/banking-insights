import React, { useEffect, useState } from 'react'
import Amplify, { API } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import awsconfig from './amplify.config'

import './App.css'

Amplify.configure(awsconfig)

function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = async () => {
    await API.post('BankingAPI', '/transactions', {
      body: {}
    })
    fetchTransactions()
  }

  const fetchTransactions = async () => {
    const tx = await API.get('BankingAPI', '/transactions')
    setTransactions(tx)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div className="App">
      
      <AmplifySignOut/>
      {transactions && transactions.length && (
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Category</th>
              <th>Merchant</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {transactions.map(({ transactionId, category, merchant, amount, date }) => (
            <tr key={transactionId}>
              <td>{transactionId}</td>
              <td>{category}</td>
              <td>{merchant}</td>
              <td>£{amount}</td>
              <td>{date}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}

      <button onClick={addTransaction}>Add Transaction</button>
      
    </div>
  );
}

export default withAuthenticator(App, {
  usernameAlias: 'email'
})
