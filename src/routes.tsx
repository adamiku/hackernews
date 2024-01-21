import { createBrowserRouter } from 'react-router-dom';
import App from './initApp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);
