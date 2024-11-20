import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRouter from './routes/MainRouter'
import { RouterProvider } from 'react-router-dom'
import MainProvider from './utils/MainProvider'
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';

createRoot(document.getElementById('root')).render(

    <MainProvider>
      <RouterProvider router={MainRouter} />
    </MainProvider>

)
