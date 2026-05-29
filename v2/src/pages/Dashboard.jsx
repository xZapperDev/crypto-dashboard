import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import MarketChart from "../components/MarketChart";
import CoinCard from "../components/CoinCard";

export default function Dashboard() {
  const [trackedIds, setTrackedIds] = useState([
    "bitcoin",
    "ethereum",
    "dogecoin",
    "usd-coin",
    "tether"
  ]);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const fetchCoinsRef = useRef();

  const fetchCoins = async (isBackground = false) => {
    if (trackedIds.length === 0) return;
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            ids: trackedIds.join(","),
          }
        }
      );

      setCoins(data);
      setLoading(false);

      if (isBackground) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchCoinsRef.current = fetchCoins;

  useEffect(() => {
    fetchCoinsRef.current(false);
  }, [trackedIds]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCoinsRef.current(true);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const addCoin = (newCoinId) => {
    const idClean = newCoinId.toLowerCase().trim();
    if (idClean && !trackedIds.includes(idClean)) {
      setTrackedIds((prev) => [...prev, idClean]);
    }
  };

  const totalValue = coins.reduce(
    (acc, coin) => acc + coin.current_price,
    0
  );

  return (
    <div className="app">
      <div className={`update-notification ${showNotification ? "show" : ""}`}>
        <span className="notification-icon">✨</span>
        <p>Precios de mercado actualizados en vivo</p>
      </div>

      <Sidebar />

      <div className="main">
        <div className="stats-grid">
          <StatsCard
            title="Tracked Coins"
            value={coins.length}
          />

          <StatsCard
            title="Total Value"
            value={`$${totalValue.toLocaleString()}`}
          />

          <StatsCard
            title="Refresh Rate"
            value="60 sec"
          />

          <StatsCard
            title="Status"
            value={loading ? "Loading" : "Live"}
          />
        </div>

        <MarketChart coins={coins} />

        <div className="coin-grid">
          {coins.map((coin) => (
            <CoinCard
              key={coin.id}
              coin={coin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}