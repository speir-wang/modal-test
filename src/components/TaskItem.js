import React from "react";
import UpArrow from "./UpArrow";

// get this comparing function from https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript

function monthDifferece(taskDate) {
	let months,
		currentDate = new Date();
	months = (currentDate.getFullYear() - taskDate.getFullYear()) * 12;
	months -= taskDate.getMonth() + 1;
	months += currentDate.getMonth();
	return months <= 0 ? 0 : months;
}

const TaskItem = ({ task }) => {
	return (
		<div className="task-item">
			{/* icon */}
			{task.ID === 456 ? <UpArrow arrowColor="#56AE5B" /> : <UpArrow arrowColor="#EF4E4D" />}

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
