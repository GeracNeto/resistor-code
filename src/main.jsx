import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Resistor } from './components/resistor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Resistor />
    <Footer />
  </React.StrictMode>
)
