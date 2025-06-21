import { createHashRouter } from 'react-router-dom';
import GuestRoute from './GuestRoute.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import { RegisterSucces } from '../pages/RegisterSucces.jsx';
import { Todos } from '../pages/Todos.jsx';
import { TodosAdd } from '../pages/TodosAdd.jsx';
import { Todo } from '../pages/Todo.jsx';
import { TodoEdit } from '../pages/TodoEdit.jsx';
import { Account } from '../pages/Account.jsx';
import { VerifyEmail } from '../pages/VerifyEmail.jsx';
import VerifiedRoute from './VerifiedRoute.jsx';
import UnverifiedRoute from './UnverifiedRoute.jsx';

export const router = createHashRouter([
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
    path: "/verify",
    element:
      <UnverifiedRoute>
        <VerifyEmail></VerifyEmail>
      </UnverifiedRoute>
  },

  {
    path: "/register/succes",
    element:
      <RegisterSucces></RegisterSucces>
  },

  {
    path: "/dashboard",
    element: <ProtectedRoute>
      <VerifiedRoute>
        <Dashboard></Dashboard>
      </VerifiedRoute>
    </ProtectedRoute>
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
      <TodosAdd />
    </ProtectedRoute>,
  },

  {
    path: "/account",
    element: <ProtectedRoute>
      <Account />
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