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
import PrivateRoute from "../components/PrivateRoute";
import FavouriteCoupons from "../pages/FavouriteCoupons";

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
                element: <PrivateRoute><Brand/></PrivateRoute>
            },
            {
                path: 'my_profile',
                element: <PrivateRoute><UpdateProfile/></PrivateRoute>
            },
            {
                path: 'about_dev',
                element: <h3 className="text-5xl text-white text-center font-bold py-48">Coming Soon</h3>
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
                element: <PrivateRoute><FavouriteCoupons/></PrivateRoute>
            },
            {
                path: '*',
                element: <Error/>
            },
        ]
    },
]);

export default router;