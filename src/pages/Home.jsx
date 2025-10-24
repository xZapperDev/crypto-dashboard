import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white fade-in">
            <Header />

            <main className="flex flex-col justify-center items-center flex-1 text-center px-8">
                <h1 className="text-5xl font-extrabold mb-6">
                    💰 Bienvenido a <span className="text-blue-500">CryptoDash</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mb-10 text-lg">
                    Analiza el mercado de criptomonedas en tiempo real, consulta precios,
                    volúmenes, y tendencias actualizadas desde la API de CoinGecko.
                </p>
                <Link
                    to="/dashboard"
                    className="bg-blue-600 hover:bg-blue-700 text-blue-100 text-lg font-semibold px-8 py-4 rounded-xl transition">
                    Ir al Dashboard 🚀
                </Link>
            </main>

            <footer className="text-gray-500 text-sm text-center py-4 border-t border-gray-800">
                © {new Date().getFullYear()} CryptoDash & LeptiveStudios — Datos desde CoinGecko API
            </footer>
        </div>
    );
};

export default Home;
