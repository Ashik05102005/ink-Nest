import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientContext, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster
      position="top-right"
      theme="light"
      richColors
      expand
      closeButton
      visibleToasts={3}
      toastOptions={{
      style:{
      borderRadius:"18px",
      padding:"16px",
      fontSize:"15px"
      }}}/>
    </QueryClientProvider>
  </StrictMode>,
)
