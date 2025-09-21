import { AuthProvider } from '../context/authContext.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {ChatProvider} from "../context/chatContext.jsx";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>     
    </AuthProvider>
  </BrowserRouter>,
)
