import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './routes/MainRouter'
import { RouterProvider } from 'react-router-dom'
import MainProvider from './utils/MainProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={MainRouter} />
    </MainProvider>
  </StrictMode>,
)
