import Home from "../Pages/Home";
import Login from "../Pages/Login";
import User from "../Pages/User";


export const ROUTES = [
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>,
        children: [
            {
                path: '',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/user',
        element: <User></User>,
        children: [
            {
                path: '',
                element: <User></User>
            }
        ]
    }
]