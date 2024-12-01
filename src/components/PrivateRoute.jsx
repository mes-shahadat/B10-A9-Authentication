import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../utils/MainProvider";

function PrivateRoute ({children}) {

    const {loading} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    const data = useLocation();


    if (loading) {
        return <h3 className="text-5xl text-white text-center font-bold py-48">Loading...</h3>
    }

    const obj = {
        pathname: data.pathname,
        state: data.state
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={obj} replace={true}/>
}

export default PrivateRoute