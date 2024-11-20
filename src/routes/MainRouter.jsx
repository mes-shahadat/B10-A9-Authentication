import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import CategoryCards from "../components/CategoryCards";

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