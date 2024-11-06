// packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/chat',
        element: <ChatPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/',
        element: <HomePage />
    }
]);

const App = () => {
    return(
        <RouterProvider router={router} />
    );
};

export default App;