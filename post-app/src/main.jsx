import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greet from './Greet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('greet')).render(
  <React.StrictMode>
    <Greet />
  </React.StrictMode>,
)
