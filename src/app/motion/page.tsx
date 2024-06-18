// pages/motionsensor.tsx
import React from "react";
import DataList from "@/components/Datalist";

const MotionSensor = () => {
	return (
		<>
			<div className='card mx-auto mt-9' style={{ maxWidth: "600px" }}>
				<div className='p-16 card-body bg-gray-400'>
					<h1 className='card-title text-center p-10'>Motion Descriptions</h1>
					<DataList />
				</div>
			</div>
		</>
	);
};

export default MotionSensor;
