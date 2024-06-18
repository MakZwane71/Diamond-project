// components/BarChart.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Define types for props
type BarChartProps = {
	data: {
		labels: string[];
		values: number[];
	};
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
	const chartRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			const myChart = new Chart(chartRef.current, {
				type: "bar",
				data: {
					labels: data.labels,
					datasets: [
						{
							label: "My Dataset",
							data: data.values,
							backgroundColor: "rgba(75, 192, 192, 0.2)",
							borderColor: "rgba(75, 192, 192, 1)",
							borderWidth: 1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});

			return () => {
				myChart.destroy();
			};
		}
	}, [data]);

	return <canvas ref={chartRef} />;
};

export default BarChart;
