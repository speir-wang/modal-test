import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalContent from "./ModalContent";
/**
 * Modal structure: header -> body -> footer
 *
 * Modal body:
 *  left: <TastList>
 *  right: <UserInput>
 */

class Modal extends Component {
	constructor() {
		super();
		this.state = {
			taskList: [
				{
					ID: 123,
					updated_Date: new Date("Aug 18, 2018"),
					title: "Crucial unit running after hours: Schedule changed",
					description: "AHU-PR12_2 is observed to be running till 6pm when the schedule is until 5:30pm…"
				},
				{
					ID: 456,
					updated_Date: new Date("Apr 12, 2018"),
					title: "Boiler unit off while command on",
					description: "Boiler 2 has been off while the command has been on."
				},
				{
					ID: 789,
					updated_Date: new Date("Feb 09, 2017"),
					title: "Crucial unit running after hours: Schedule changed",
					description: "AHU-PR12_2 is observed to be running till 6pm when the schedule is until 5:30pm…"
				}
			]
		};
	}
	renderTaskList() {
		return this.state.taskList.map(task => {
			return (
				<div key={task.ID}>
					<p>
						<span className="task-id">#{task.ID}</span>
						<span className="updated-date">{task.updated_Date.toLocaleDateString()}</span>
					</p>
					<p>{task.title}</p>
					<p>{task.description}</p>
					<p />
				</div>
			);
		});
	}
	render() {
		return (
			<div className="modal-container">
				<div className="modal-header">
					<section className="left">
						<span className="current-widget">Current Widget</span>
						<span className="add-widget">Add Widget</span>
					</section>
					<section className="right">
						<span>X</span>
					</section>
				</div>
				<div className="modal-content">
					<section className="modal-content-left">{this.renderTaskList()}</section>
					<section className="modal-content-right">
						<div>
							<label htmlFor="name">Name</label>
							<input type="text" id="name" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" id="email" />
						</div>
					</section>
				</div>
				<ModalFooter />
			</div>
		);
	}
}

export default Modal;
