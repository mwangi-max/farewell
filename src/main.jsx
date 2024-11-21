import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Kikuyu from './Kikuyu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kikuyu />
  </StrictMode>,
)
