import { useEffect, useRef } from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = ({ data }) => {
    const chartRef = useRef();

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: "Precio (USD)",
                data: data.datasets[0].data,
                fill: true,
                borderColor: "#3b82f6",
                backgroundColor: (ctx) => {
                    const chart = ctx.chart;
                    const { ctx: context, chartArea } = chart;
                    if (!chartArea) return null;
                    const gradient = context.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, "rgba(59, 130, 246, 0)");
                    gradient.addColorStop(1, "rgba(59, 130, 246, 0.25)");
                    return gradient;
                },
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: "index",
                intersect: false,
                backgroundColor: "#1e293b",
                titleColor: "#f8fafc",
                bodyColor: "#cbd5e1",
                borderWidth: 1,
                borderColor: "#334155",
            },
        },
        interaction: {
            intersect: false,
            mode: "nearest",
        },
        scales: {
            x: {
                grid: { color: "rgba(55,65,81,0.3)" },
                ticks: { color: "#9ca3af" },
            },
            y: {
                grid: { color: "rgba(55,65,81,0.3)" },
                ticks: { color: "#9ca3af" },
            },
        },
    };

    return (
        <div className="w-full h-[400px] p-2">
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
};

export default Chart;
