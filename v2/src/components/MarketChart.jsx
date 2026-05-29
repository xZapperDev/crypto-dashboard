import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function MarketChart({ coins }) {
  const data = coins.map((coin) => ({
    name: coin.symbol.toUpperCase(),
    price: coin.current_price
  }));

  return (
    <div className="chart-box">
      <h2 style={{ marginBottom: "20px" }}>
        Live Market Prices
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            stroke="#79799e" 
            tick={{ fill: '#79799e', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            stroke="#79799e" 
            tick={{ fill: '#79799e', fontSize: 12 }}
            dx={-10}
          />
          
          <Tooltip 
            contentStyle={{
              backgroundColor: "#161636",
              border: "1px solid rgba(0, 242, 254, 0.4)",
              borderRadius: "12px",
              color: "#ffffff",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.6)"
            }}
            itemStyle={{
              color: "#00f2fe"
            }}
            labelStyle={{
              color: "#79799e",
              fontWeight: "bold",
              marginBottom: "4px"
            }}
            cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }}
          />

          <Bar
            dataKey="price"
            fill="#00f2fe"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}