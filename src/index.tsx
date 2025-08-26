import React from 'react'
import ReactDOM from 'react-dom/client'
import PetSitePage from './pages/PetSitePage/PetSitePage.tsx'
import './assets/scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PetSitePage />
  </React.StrictMode>,
)
