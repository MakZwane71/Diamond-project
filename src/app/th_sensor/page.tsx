import Head from "next/head";
import TemperatureHumidityDisplay from "@/components/TempHumidity";

const Home = () => {
	return (
		<div
			className='card mx-auto mt-9'
			style={{ maxWidth: "600px", borderRadius: "7px" }}>
			<div className='p-16 card-body bg-gray-400'></div>
			<div className='text-center p-10'>
				<Head>
					<title>Temperature and Humidity Display</title>
					<meta
						name='description'
						content='Display temperature and humidity sensor data.'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main>
					<h1>Temperature and Humidity</h1>
					<TemperatureHumidityDisplay />
				</main>

				{/* <footer>
					<p>Footer content here</p>
				</footer> */}
			</div>
		</div>
	);
};

export default Home;
