import React from 'react'
import ReactDOM from 'react-dom'
import App from 'pages/App'
import * as serviceWorker from './serviceWorker'
import AppProvider from 'stores/AppProvider'
import { BrowserRouter } from 'react-router-dom'

const RoutedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <RoutedApp />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
