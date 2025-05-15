import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@assets/styles/main.scss'
import App from './App.tsx'
import { Layout } from './ui/template/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>,
)
