import React from 'react'
import ReactDOM from 'react-dom/client'
import Appbar from './Appbar'
import Area from './Chatbox'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appbar/>
    <Area/>
    
  </React.StrictMode>,
)


