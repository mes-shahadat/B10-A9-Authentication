import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryCards from "../components/CategoryCards";
import Brands from "../pages/Brands";
import Brand from "../pages/Brand";
import Error from "../components/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
                loader: () => fetch('/fake_coupon_data.json'),
                children: [
                    {
                        path: '/',
                        element: <CategoryCards />,
                        loader: () => fetch('/fake_coupon_data.json')
                    },
                    {
                        path: '/categories/:category',
                        element: <CategoryCards />,
                        loader: ({params}) => fetch('/fake_coupon_data.json')
                            .then(res => res.json())
                            .then( data => data.filter (
                                item => item.category == params.category
                            ))
                    },
                ]
            },
            {
                path: 'brands',
                element: <Brands/>,
                loader: () => fetch('/fake_coupon_data.json')
            },
            {
                path: 'brand/:id',
                element: <Brand/>
            },
            {
                path: 'my_profile',
                element: <UpdateProfile/>
            },
            {
                path: 'about_dev',
                element: <h3>about dev page</h3>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'forgot_password',
                element: <ForgotPassword/>
            },
            {
                path: 'my_coupons',
                element: <h3>favourite coupon page</h3>
            },
            {
                path: '*',
                element: <Error/>
            },
        ]
    },
]);

export default router;