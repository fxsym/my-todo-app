import { createBrowserRouter } from 'react-router-dom';
import GuestRoute from './GuestRoute.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import { Todos } from '../pages/Todos.jsx';
import { TodosAdd } from '../pages/TodosAdd.jsx';
import { Todo } from '../pages/Todo.jsx';
import { TodoEdit } from '../pages/TodoEdit.jsx';

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
  },
  
  {
    path: "/todos",
    element: <ProtectedRoute>
      <Todos></Todos>
    </ProtectedRoute>,
  },

  {
    path: "/todos/add",
    element: <ProtectedRoute>
      <TodosAdd/>
    </ProtectedRoute>,
  },

  {
    path: "/todo/:todoId",
    element: <ProtectedRoute>
      <Todo />
    </ProtectedRoute>,
  },

  {
    path: "/todo/edit/:todoId",
    element: <ProtectedRoute>
      <TodoEdit />
    </ProtectedRoute>,
  },


])