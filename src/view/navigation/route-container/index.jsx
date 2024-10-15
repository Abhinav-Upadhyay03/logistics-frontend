import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../../pages/signIn-page'
import ErrorPage from '../../components/common/error-page'
import { Routes } from '../routes'
import App from '../../../App'
import SignUp from '../../pages/signUp-page'
import UserPage from '../../pages/user-page'
import DriverPage from '../../pages/driver-page'
import AllVehicles from '../../pages/all-vehicles-page'
import UserBooking from '../../pages/user-booking'
import AdminPage from '../../pages/admin-page'

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
    {
        path: Routes.User,
        element: <UserPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.Driver,
        element: <DriverPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.AllVehicles,
        element: <AllVehicles />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.UserBooking,
        element: <UserBooking />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.Admin,
        element: <AdminPage />,
        errorElement: <ErrorPage />,
    }
])

export default router
