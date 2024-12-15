import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const options = [
        'Home',
        'Hero',
        'Gadgets',
        'Features',
        'ContactUs'
    ];

    return (
        <div className="bg-blue-200 w-full">
            <div className="flex items-center justify-between px-6 py-4">
                <Link
                    to="/Home"
                    className="text-lg font-bold text-blue-800"
                >
                    Logo
                </Link>
                <div className="flex gap-4">
                    {options.map((it) => (
                        <NavLink
                            key={it}
                            className={({ isActive }) =>
                                `block py-2 px-4 hover:text-blue-700 rounded-full ${isActive ? "bg-orange-600 text-white" : "text-blue-800"}`
                            }
                            to={`/${it}`}
                        >
                            {it}
                        </NavLink>
                    ))}
                </div>
                <div className="flex p-1 gap-2">
                    <button
                        onClick={() => navigate('/signup')}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full">
                        Signup
                    </button>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
