import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Layout from '../Pages/Layout'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import NavBar from '../Components/NavBar'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
        errorElement: <ErrorPage/>,
        children:[
            {
                index: 'true',
                element: <Home/>
            },
            {
                path: '/Layout',
                element: <Layout/>
            },
            {path: '/SignIn',
             element: <SignIn/>
        },
        {
            path:'/SignUp',
            element: <SignUp/>
        },
        {
            path:'/NavBar',
            element: <NavBar/>
        },
        ],
    },
]);