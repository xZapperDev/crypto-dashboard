import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Header from "../components/Header";
import { getMarketData } from "../services/coingecko";

const Dashboard = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        try {
            const data = await getMarketData();
            setMarketData(data);
            setLoading(false);
        } catch (err) {
            console.error("Error cargando datos:", err);
        }
    };

    useEffect(() => {
        loadData();
        const interval = setInterval(loadData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
                Cargando datos del mercado...
            </div>
        );
    }

    const chartData = {
        labels: marketData.map((coin) => coin.symbol.toUpperCase()),
        datasets: [
            {
                label: "Precio (USD)",
                data: marketData.map((coin) => coin.current_price),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white fade-in">
            <Header />

            <main className="max-w-6xl mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    📊 Panel de Criptomonedas
                </h1>

                {/* ====== CHART SECTION ====== */}
                <section className="card mb-10 backdrop-blur-sm bg-gray-800/70 border border-gray-700/40 shadow-lg shadow-blue-900/20">
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">
                        Top 5 Criptomonedas por Precio
                    </h2>
                    <Chart data={chartData} />
                </section>

                {/* ====== METRICS ====== */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {marketData.slice(0, 4).map((coin) => (
                        <div
                            key={coin.id}
                            className="card flex flex-col justify-between border border-gray-700/40 bg-gray-800/60 hover:bg-gray-700/60"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                                <div>
                                    <h3 className="font-semibold text-lg">{coin.name}</h3>
                                    <span className="text-xs text-gray-400 uppercase">
                                        {coin.symbol}
                                    </span>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-blue-400">
                                ${coin.current_price.toLocaleString()}
                            </p>
                            <p
                                className={`text-sm mt-1 ${coin.price_change_percentage_24h >= 0
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }`}
                            >
                                {coin.price_change_percentage_24h.toFixed(2)}% 24h
                            </p>
                        </div>
                    ))}
                </section>

                {/* ====== TABLE ====== */}
                <section className="card overflow-x-auto border border-gray-700/40 bg-gray-800/60 shadow-md shadow-blue-900/10">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Datos del mercado
                    </h2>
                    <table className="w-full text-sm text-gray-300">
                        <thead className="border-b border-gray-700 text-gray-400 uppercase text-xs tracking-wide">
                            <tr>
                                <th className="py-3 text-left">#</th>
                                <th className="py-3 text-left">Moneda</th>
                                <th className="py-3 text-right">Precio</th>
                                <th className="py-3 text-right">Cambio 24h</th>
                                <th className="py-3 text-right">Market Cap</th>
                                <th className="py-3 text-right">Volumen 24h</th>
                                <th className="py-3 text-right">Máximo 24h</th>
                                <th className="py-3 text-right">Mínimo 24h</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marketData.map((coin, index) => (
                                <tr
                                    key={coin.id}
                                    className="border-b border-gray-800 hover:bg-gray-700/40 transition"
                                >
                                    <td className="py-3">{index + 1}</td>
                                    <td className="flex items-center gap-2 py-3">
                                        <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                                        <span>{coin.name}</span>
                                        <span className="text-gray-400 text-xs uppercase">
                                            ({coin.symbol})
                                        </span>
                                    </td>
                                    <td className="py-3 text-right">
                                        ${coin.current_price.toLocaleString()}
                                    </td>
                                    <td
                                        className={`py-3 text-right ${coin.price_change_percentage_24h >= 0
                                                ? "text-green-400"
                                                : "text-red-400"
                                            }`}
                                    >
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </td>
                                    <td className="py-3 text-right">
                                        ${coin.market_cap.toLocaleString()}
                                    </td>
                                    <td className="py-3 text-right">
                                        ${coin.total_volume.toLocaleString()}
                                    </td>
                                    <td className="py-3 text-right">
                                        ${coin.high_24h.toLocaleString()}
                                    </td>
                                    <td className="py-3 text-right">
                                        ${coin.low_24h.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <p className="text-gray-500 text-center mt-8 text-xs">
                    Datos obtenidos de CoinGecko API — Actualización cada 60 s.
                </p>
            </main>
        </div>
    );
};

export default Dashboard;
