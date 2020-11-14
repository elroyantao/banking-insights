import React, { useEffect, useState } from 'react'
import Amplify, { API } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import awsconfig from './amplify.config'

import logo from './logo.svg'
import './App.css'

Amplify.configure(awsconfig)

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchMessage = async () => {
      const { message } = await API.get('BankingAPI', '/transactions')
      setMessage(message)
    }

    fetchMessage()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to serverless
        </a>
        {message && <div>{message}</div>}
      </header>
    </div>
  );
}

export default withAuthenticator(App, {
  usernameAlias: 'email'
})
