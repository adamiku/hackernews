import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import { router } from './routes.tsx';
import { ProvidersTree } from './utils.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProvidersTree>
            <RouterProvider router={router} />
        </ProvidersTree>
    </React.StrictMode>
);
