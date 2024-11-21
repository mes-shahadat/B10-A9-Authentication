import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useRef, useState } from "react";

function Login () {

    const [passwordShown, setPasswordShown] = useState(false)
    const passwordRef = useRef('')
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleClick = () => {
        passwordRef.current.type = passwordShown ? "password" : "Text"
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <section className="my-10 mx-2">
        <div className="bg-white max-w-[500px] p-8 md:p-20 space-y-8 rounded-lg mx-auto">
        <p className="text-xl font-bold text-center">Login to Discount PRO</p>

        <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="email" placeholder="Email" name="email" onChange={e => handleChange(e)} required/>
        <div className="relative">
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="password" placeholder="Password" name="password" ref={passwordRef} required />
        <div className="absolute top-3 right-3 text-2xl" onClick={handleClick}>
        {
            passwordShown ? <FaRegEyeSlash /> : <FaRegEye />
        }
        </div>
        </div>

        <Link className="text-sm inline-block m-1 hover:underline" to='/forgot_password' state={email}>Forgot Password ?</Link>
        <div className="flex justify-between">
            <button className="border w-[48%] py-3 font-semibold rounded-lg">Google</button>
            <button className="border w-[48%] py-3 font-semibold rounded-lg bg-[#004e98] text-white" type="submit">Log In</button>
        </div>
        </form>
        
        <p className="font-semibold text-center">Don't have an account ? <Link className="text-blue-600" to="/register">Sign Up</Link></p>
        </div>
    </section>
}

export default Login;