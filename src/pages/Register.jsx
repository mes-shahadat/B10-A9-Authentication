import { Link, Navigate, useLocation } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../utils/MainProvider";

function Register () {

    const [passwordShown, setPasswordShown] = useState(false)
    const passwordRef = useRef()
    const [passwordTest, setPasswordTest] = useState({
        upperLetter : false,
        lowerLetter : false,
        whitespaces : false,
        length : false 
    })

    const {createUser, updateUser, user, loginGoogleUser} = useContext(AuthContext);
    const {state} = useLocation();

    const handleChange = (e) => {

        let arr = passwordTest;

        if (/[a-z]/.test(e.target.value)) {
            arr = {...arr, lowerLetter : true}
        } else {
            arr ={...arr, lowerLetter : false}
        }

        if (/[A-Z]/.test(e.target.value)) {
            arr = {...arr, upperLetter : true}
        } else {
            arr = {...arr, upperLetter : false}
        }

        if (/^\S*$/.test(e.target.value)) {
            arr = {...arr, whitespaces : true}
        } else {
            arr = {...arr, whitespaces : false}
        }

        if (/.{6,}/.test(e.target.value)) {
            arr = {...arr, length : true}
        } else {
            arr = {...arr, length : false}
        }

        setPasswordTest(arr)
    }

    const handleClick = () => {
        passwordRef.current.type = passwordShown ? "password" : "Text"
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        createUser(e.target.email.value, e.target.password.value, () => updateUser ({
            displayName: e.target.name.value, photoURL: e.target.photo_url.value, email: e.target.email.value
          }))
        
    }

    return <section className="my-10 mx-2">
        { user ? <Navigate to={state?.pathname || "/"} state={state?.state} replace={true}/> : null }
        <div className="bg-white max-w-[500px] p-8 md:p-20 space-y-8 rounded-lg mx-auto">
        <p className="text-xl font-bold text-center">Register for Discount PRO</p>

        <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="text" placeholder="Name" name="name"/>
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="text" placeholder="Photo URL" name="photo_url" />
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="email" placeholder="Email" name="email" required/>
        <div className="relative">
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="password" placeholder="Password" name="password" pattern="^(?=.*[A-Z])(?=.*[a-z])\S{6,}$" ref={passwordRef} onChange={e => handleChange(e)} required/>
        <div className="absolute top-3 right-3 text-2xl" onClick={handleClick}>
        {
            passwordShown ? <FaRegEyeSlash /> : <FaRegEye />
        }
        </div>
        <div className="text-xs p-1 space-y-1 mt-2">
        <p className={passwordTest.upperLetter ? "text-green-500": "text-red-500"}>Must have an Uppercase letter in the password </p>
        <p className={passwordTest.lowerLetter ? "text-green-500": "text-red-500"}>Must have a Lowercase letter in the password  </p>
        <p className={passwordTest.whitespaces ? "text-green-500": "text-red-500"}>Mustn't have whitespaces in the password  </p>
        <p className={passwordTest.length ? "text-green-500": "text-red-500"}>Password Length must be at least 6 character </p>
        </div>
        </div>

            <button className="border w-full py-3 font-semibold rounded-lg bg-[#004e98] text-white" type="submit">Register</button>
            <hr />
            <button className="border w-full py-3 font-semibold rounded-lg" type="button" onClick={loginGoogleUser}>Google</button>
        </form>
        
        <p className="font-semibold text-center">Already have an account ? <Link className="text-blue-600" to='/login' state={state}>Log In</Link></p>
        </div>
    </section>
}

export default Register;