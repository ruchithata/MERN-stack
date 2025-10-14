import { Provider } from "./components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
// import TestModal from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
        {/* <TestModal/> */}
        <Toaster/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
