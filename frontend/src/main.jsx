import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientContext, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
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
  </StrictMode>,
)
