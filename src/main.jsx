import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick-theme.css";
import 'react-inner-image-zoom/lib/styles.min.css';
import { ThemeProvider } from 'next-themes'
import { store } from './component/reduxSlice/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme='light'>
      <Provider store={store}>  
         <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
