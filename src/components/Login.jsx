const Login = () => {
    return (
        <>
            <section className="py-20 bg-blue-400" id="contact">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Login</h2>
                    <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                    Password
                                </label>
                                <input
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;