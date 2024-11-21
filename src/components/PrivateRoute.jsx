import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../utils/MainProvider";

function PrivateRoute ({children}) {

    const {user} = useContext(AuthContext);
    const data = useLocation();

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