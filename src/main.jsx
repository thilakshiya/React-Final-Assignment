import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { StudentProvider } from './componants/context/StudentsContext.jsx'

createRoot(document.getElementById('root')).render(
<MantineProvider>
     <StudentProvider>
     <BrowserRouter>
     <StrictMode>
     <App />
     </StrictMode>
     </BrowserRouter>
     </StudentProvider>
     </MantineProvider>,
        
 
)
