import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cambodia from './Cambodia.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cambodia />
  </StrictMode>
)
