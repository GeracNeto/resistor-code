import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components/footer'
import { Resistor } from './components/resistor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>header here</h1>
    <Resistor />
    <Footer />
  </React.StrictMode>
)
