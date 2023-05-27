import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                    <h1 className="text-white font-semibold">Logo</h1>
                    </div>
                    <div className="flex">
                    <div className="flex space-x-4">
                        <Link href = "/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link href = "/dashboard" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                    </div>
                    <div className="ml-4 flex space-x-4">
                        <Link href = "/signin" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
                        <Link href = "/signup" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;