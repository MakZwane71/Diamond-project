// pages/index.tsx
"use client";
import styled from "styled-components"; // Import styled-components for styling
import BarChart from "@/components/BarChart";

// Styled component for the card
const Card = styled.div`
	background-color: #f0f0f0;
	border: 1px solid #eaeaea;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin-bottom: 20px;
`;

const IndexPage: React.FC = () => {
	const chartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		values: [65, 59, 80, 81, 56, 55, 40],
	};

	return (
		<div className='p-10'>
			<h1 className='text-center'>Bar Chart Example</h1>

			{/* Card component wrapping the chart */}
			<Card>
				<h2>Monthly Data</h2>
				<BarChart data={chartData} />
			</Card>
		</div>
	);
};

export default IndexPage;
