import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
                    💰 CryptoDash
                </Link>
                <div className="flex gap-6 text-gray-300">
                    <Link
                        to="/"
                        className={`hover:text-blue-400 transition ${location.pathname === "/" ? "text-blue-400 font-semibold" : ""
                            }`}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`hover:text-blue-400 transition ${location.pathname === "/dashboard" ? "text-blue-400 font-semibold" : ""
                            }`}
                    >
                        Dashboard
                    </Link> <Link
                        to="https://github.com/xZapperDev/crypto-dashboard"
                        className={`hover:text-blue-400 transition ${location.pathname === "/dashboard" ? "text-blue-400 font-semibold" : ""
                            }`}
                    >
                        Github Profile
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
