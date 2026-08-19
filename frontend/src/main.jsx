import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <BrowserRouter>
  <UserContext>
    <App />
 </UserContext>
 </BrowserRouter>
 </Provider>,
)
