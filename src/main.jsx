import { createRoot } from 'react-dom/client'
import './index.css'
import router from './view/navigation/route-container/index.jsx'
import ErrorBoundary from './view/components/common/error-boundary/index.jsx'
import App from './App.jsx'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
          <RouterProvider router={router}/>
    </ErrorBoundary>
  </StrictMode>

)
