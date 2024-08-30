import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/style/global.css';
import './assets/style/style.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render( <
    BrowserRouter > <
    App / > < /BrowserRouter>


)