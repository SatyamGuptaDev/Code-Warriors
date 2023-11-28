import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'; 
// add store
import { Provider } from 'react-redux'
import store from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <React.StrictMode>
  <Router> 
    <App />
  </Router>
  </React.StrictMode>
  </Provider>,

)
