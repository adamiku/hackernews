import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProvidersTree } from './utils.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProvidersTree>
            <App />
        </ProvidersTree>
    </React.StrictMode>
)
