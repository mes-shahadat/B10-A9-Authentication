import { createContext, useState } from "react"

export const AuthContext = createContext(null);

function MainProvider({ children }) {

    const [menu, setMenu] = useState(false)
    const [user, setUser] = useState(null)
    const [favourites, setFavourites] = useState([])
    const [coupons, setCoupons] = useState([])

    const handleClick = (add) => {

        if (add === true ) {

            setMenu(true);
        }
        else if (add === false) {

            setMenu(false);
        }
    }

    const authInfo = {
        menu,
        user,
        favourites,
        coupons,
        setMenu,
        setUser,
        handleClick,
        setFavourites,
        setCoupons
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default MainProvider;