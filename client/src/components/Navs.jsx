import {
    Link
} from "react-router-dom"
const Navs =()=> {

    return (
        <>
        <header
        className="
        fixed top-4 left-1/2 -translate-x-1/2
        flex w-[95%] max-w-6xl items-center justify-between
        rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-lg
        px-6 py-3
        uppercase
        z-50
        "
        >
            <div className="text-xl font-bold tracking-wide text-gray-800">
             Logo
            </div>
            <ul className="flex items-center gap-8 text-gray-700 font-medium">
                <li className="cursor-pointer transition-colors hover:text-blue-600">
                    <Link to='/login'>
                        Log in
                    </Link> 
                </li>
                <li className="cursor-pointer transition-colors hover:text-blue-600">
                    <Link to="/events">Events</Link>
                </li>
                <li className="cursor-pointer transition-colors hover:text-blue-600">
                    <Link to="/attendance">attendance</Link>
                </li>
            </ul>
        </header>
        </>
    )
}
export default Navs;