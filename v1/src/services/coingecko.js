import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const getMarketData = async () => {
    try {
        const res = await axios.get(`${API_URL}/coins/markets`, {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 5,
                page: 1,
                sparkline: false
            },
        });
        return res.data;
    } catch (error) {
        console.error("Error al obtener datos del mercado:", error);
        return [];
    }
};

export const getChartData = async (coin) => {
    try {
        const res = await axios.get(`${API_URL}/coins/${coin}/market_chart`, {
            params: {
                vs_currency: "usd",
                days: 7,
            },
        });
        return res.data;
    } catch (error) {
        console.error("Error al obtener datos del gráfico:", error);
        return null;
    }
};
