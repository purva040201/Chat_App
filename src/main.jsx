// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'



createRoot(document.getElementById('root')).render(
<BrowserRouter basename='/Chat_App'>
<AppContextProvider>
<App />
</AppContextProvider>

</BrowserRouter>
   
 
)
