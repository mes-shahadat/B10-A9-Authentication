import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../utils/MainProvider";

function ForgotPassword() {

    const { state } = useLocation()
    const {resetUserPassword} = useContext(AuthContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        resetUserPassword(e.target.email.value);
    }

    return <section className="my-10 mx-2">
        <div className="bg-white max-w-[500px] p-8 md:p-20 space-y-8 rounded-lg mx-auto">
            <p className="text-xl font-bold text-center">Forgot Password</p>
            <p className="font-semibold text-center">Enter your email address below and we'll send reset link to this email.</p>

            <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
                <input className="w-full border p-3 rounded-lg focus:outline-none" type="email" placeholder="Email" name="email" defaultValue={state} required />


                <button className="border w-full py-3 font-semibold rounded-lg bg-[#004e98] text-white" type="submit">Reset Password</button>
            </form>

            <p className="font-semibold text-center">Don't have an account ? <Link className="text-blue-600" to="/register">Sign Up</Link></p>
        </div>
    </section>
}

export default ForgotPassword;