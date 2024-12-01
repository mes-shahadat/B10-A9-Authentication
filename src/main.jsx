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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <MainProvider>
      <ToastContainer />
      <RouterProvider router={MainRouter} />
    </MainProvider>
  </StrictMode>

)
