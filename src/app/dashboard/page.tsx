import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const Dashboard = async () => {
	const session = await getServerSession();
	if (!session) {
		redirect("/");
	}

	return (
		<div className='relative'>
			{/* Dashboard title */}
			<h1 className='flex flex-col items-center justify-between p-20'>
				Dashboard
			</h1>
			{/* <div className='bg-[#838080] p-10 rounded shadow-md gap-4'></div> */}
			<div className='grid grid-cols-2 gap-4'>
				<div className='bg-[#838080] p-10 rounded shadow-md'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxektxFUJ0gfKyZzE4UAFtwWxBQaravEbhw&s'
						className='background-position: place-items-center'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black hover:underline mt-2'
						href='/gas_sensor'>
						Gas Sensor
					</Link>
				</div>
				<div className='bg-[#838080] p-10 rounded shadow-md'>
					<img
						src='data:image/jpeg;base64,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'
						className='mr-2'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black hover:underline mt-2'
						href='/th_sensor'>
						TH Sensor
					</Link>
				</div>
				<div className='bg-[#838080] p-10 rounded shadow-md'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EIPTaaU91CsIppwUefkn2b9DmdEtHUTIOA&s'
						className='mr-2'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black hover:underline mt-2'
						href='/motion'>
						Motion
					</Link>
				</div>
				<div className='bg-[#838080] p-10 rounded shadow-md'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrfyAiHfcBf2g7Vobb9F0THWFmwgDXFZGJw&s'
						className='mr-2'
						style={{ mixBlendMode: "multiply" }}
					/>

					<Link
						className='block text-center text-black hover:underline mt-2'
						href='/data_chart'>
						Data Chart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
