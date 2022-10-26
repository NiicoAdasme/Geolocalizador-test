import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import './assets/index.css'

import { registerSW } from 'virtual:pwa-register'

const intervalMS = 60 * 60 * 1000 // * check the service worker every hour.

const updateSW = registerSW({
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
