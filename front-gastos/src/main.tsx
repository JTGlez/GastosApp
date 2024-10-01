import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GastosApp } from './GastosApp'
import '@/styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GastosApp />
  </StrictMode>,
)
