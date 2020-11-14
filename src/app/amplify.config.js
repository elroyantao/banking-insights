const config = {
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID
  },
  API: {
    endpoints: [{
      name: 'BankingAPI',
      endpoint: process.env.REACT_APP_API_ENDPOINTS,
      region: process.env.REACT_APP_REGION
    }]
  }
}

export default config