import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'brands',
                element: <h3>bands page</h3>
            },
            {
                path: 'brands/:id',
                element: <h3>band details page</h3>
            },
            {
                path: 'my_profile',
                element: <h3>profile page</h3>
            },
            {
                path: 'about_dev',
                element: <h3>about dev page</h3>
            },
            {
                path: 'register',
                element: <h3>register page</h3>
            },
            {
                path: 'login',
                element: <h3>login page</h3>
            },
            {
                path: 'forgot_password',
                element: <h3>forgot password page</h3>
            },
            {
                path: 'my_coupons',
                element: <h3>favourite coupon page</h3>
            },
            {
                path: '*',
                element: <h3>error page</h3>
            },
        ]
    },
]);

export default router;