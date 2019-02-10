import React from "react";

function monthDifferece(taskDate) {
	let months,
		currentDate = new Date();
	months = (currentDate.getFullYear() - taskDate.getFullYear()) * 12;
	months -= taskDate.getMonth() + 1;
	months += currentDate.getMonth();
	return months <= 0 ? 0 : months;
}

const TaskItem = ({ task }) => {
	// get the method from https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript

	return (
		<div className="task-item">
			{/* icon */}
			<svg width="24px" height="24px" viewBox="0 0 20 24">
				<g fill="#EF4E4D">
					<path
						d="M4.5377909,10.80023 C4.4510763,10.7993966 4.37378495,10.7454277 4.34321422,10.664366 C4.31264349,10.5833044 4.33507619,10.4918097 4.3996873,10.4340332 L11.6287834,4.07993421 C12.1011648,3.63504637 12.1358821,2.89634543 11.7073039,2.40920802 C11.2787257,1.92207061 10.5408744,1.86156425 10.0384994,2.27236026 L0.680096829,10.4984103 C0.247706114,10.8793212 7.1145496e-17,11.4274452 0,12.0033284 C-7.1145496e-17,12.5792116 0.247706114,13.1273357 0.680096829,13.5082466 L10.0368254,21.7326245 C10.539421,22.1381261 11.2727138,22.0756572 11.6993088,21.5909981 C12.1259039,21.1063391 12.094058,20.3718871 11.6271094,19.9258866 L4.39801331,13.5717876 C4.33340221,13.5140111 4.3109695,13.4225164 4.34154023,13.3414548 C4.37211096,13.2603931 4.44940232,13.2064242 4.53611692,13.2055908 L22.826491,13.2055908 C23.4795448,13.1883959 24,12.6546323 24,12.0020743 C24,11.3495164 23.4795448,10.8157527 22.826491,10.7985578 L4.5377909,10.80023 Z"
						id="Path"
						transform="translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000) "
					/>
				</g>
			</svg>
			{/* id and date */}
			<div className="meta">
				<span className="task-id">#{task.ID}</span>
				<span className="updated-date">{task.updated_Date.toLocaleDateString()}</span>
			</div>
			{/* title */}
			<h3 className="title">{task.title}</h3>
			{/* description */}
			<blockquote>{task.description}</blockquote>
			{/* how old is this item, e.g. +5 months old */}
			<p className="sub-meta">+{monthDifferece(task.updated_Date)} Months old</p>
			<hr className="divider" />
		</div>
	);
};

export default TaskItem;