export default function CoinCard({ coin }) {
  return (
    <div className="coin-card">
      <div className="coin-header">
        <h2>{coin.name}</h2>

        <span
          className={
            coin.price_change_percentage_24h >= 0
              ? "green"
              : "red"
          }
        >
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>

      <div className="price">
        ${coin.current_price.toLocaleString()}
      </div>

      <p style={{ marginTop: "10px", opacity: 0.7 }}>
        Market Cap:
        {" "}
        ${coin.market_cap.toLocaleString()}
      </p>
    </div>
  );
}