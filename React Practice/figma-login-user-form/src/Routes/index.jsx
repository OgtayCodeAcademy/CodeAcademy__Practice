import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserPage from "../Pages/Userpage";


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
        path: '/user-page',
        element: <UserPage></UserPage>,
        children: [
            {
                path: '',
                element: <UserPage></UserPage>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>,
        children: [
            {
                path: '',
                element: <Register></Register>
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
    }
]