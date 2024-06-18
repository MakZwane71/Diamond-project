// components/GaugeChart.tsx
import React from "react";
import GaugeChart from "react-gauge-chart";

interface GaugeChartProps {
	id: string;
	percent: number;
	text: string;
}

const GaugeChartComponent: React.FC<GaugeChartProps> = ({
	id,
	percent,
	text,
}) => {
	return (
		<div>
			<GaugeChart
				id={id}
				nrOfLevels={30}
				percent={percent}
				textColor='#000000'
			/>
			<p>{text}</p>
		</div>
	);
};

export default GaugeChartComponent;
