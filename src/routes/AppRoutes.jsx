import { createBrowserRouter } from 'react-router-dom';
import GuestRoute from './GuestRoute.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <GuestRoute>
      <Login></Login>
    </GuestRoute>,
  },

  {
    path: "/register",
    element: <GuestRoute>
      <Register></Register>
    </GuestRoute>,
  },

  {
    path: "/dashboard",
    element: <ProtectedRoute>
      <Dashboard></Dashboard>
    </ProtectedRoute>,

  }

])