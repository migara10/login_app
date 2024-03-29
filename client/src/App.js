import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// import all components
import Username from './components/Username'
import Reset from './components/Reset'
import Register from './components/Register'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Password from './components/Password'
import PageNotFound from './components/PageNotFound'

// routers
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/reset',
        element: <Reset />
    },
    {
        path: '/recovery',
        element: <Recovery />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/password',
        element: <Password />
    },
    {
        path: '*',
        element: <PageNotFound />
    },
])

function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App