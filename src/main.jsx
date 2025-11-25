import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Lancamentos from './pages/Lancamentos.jsx';
import Historico from './pages/Historico.jsx';
import { AppContext } from './context/AppContext.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/lancamentos',
    element: <Lancamentos/>
  },
  {
    path: '/historico',
    element: <Historico/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>

      <RouterProvider router={router}/>
    </AppContext>
  </StrictMode>,
)
