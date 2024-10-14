import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../../pages/signIn-page'
import ErrorPage from '../../components/common/error-page'
import { Routes } from '../routes'
import App from '../../../App'
import SignUp from '../../pages/signUp-page'

const router = createBrowserRouter([
    {
        path: Routes.LandingPage,
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.Login,
        element: <SignIn />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.SignUp,
        element: <SignUp />,
        errorElement: <ErrorPage />,
    },
])

export default router
