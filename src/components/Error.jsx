import { Link } from "react-router-dom";

function Error() {

    return (
        <>
            <div className="text-center space-y-4 py-7 px-2 text-white">
                <p className="text-9xl font-black">404</p>
                <p className="text-2xl">Oops! Page Not Found!</p>
                <p className="max-w-[55ch] mx-auto">We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>

                <Link className="px-6 py-2 inline-block bg-[#004e98] rounded-lg font-semibold shadow-sm" to={-1}>Go back</Link>
            </div>
        </>
    )
}

export default Error;