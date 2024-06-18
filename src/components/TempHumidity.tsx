"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TemperatureHumidityDisplay = () => {
	const [temperature, setTemperature] = useState(null);
	const [humidity, setHumidity] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/sensors");
				setTemperature(response.data.temperature);
				setHumidity(response.data.humidity);
			} catch (error) {
				console.error("Error fetching sensor data:", error);
			}
		};

		const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, []);

	return (
		<div>
			<h2>Temperature: {temperature} °C</h2>
			<h2>Humidity: {humidity} %</h2>
		</div>
	);
};

export default TemperatureHumidityDisplay;
