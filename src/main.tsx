import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './locales/i18n'
import './index.css'

console.log('🚀 main.tsx loaded')

const rootElement = document.getElementById('root')
console.log('📍 Root element:', rootElement)

if (!rootElement) {
  console.error('❌ Root element not found!')
  throw new Error('Root element #root not found in HTML')
}

console.log('✅ Starting React render...')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
console.log('✅ React render complete')