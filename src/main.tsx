import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import EditMovie from './pages/EditMovie'
import ErrorPage from './pages/ErrorPage'
import Genres from './pages/Genres'
import GraphQL from './pages/GraphQL'
import Home from './pages/Home'
import Login from './pages/Login'
import Manage from './pages/Manage'
import Movies from './pages/Movies'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/genres', element: <Genres /> },
      { path: '/admin/movie/0', element: <EditMovie /> },
      { path: '/admin', element: <Manage /> },
      { path: '/graphql', element: <GraphQL /> },
      { path: '/login', element: <Login /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
