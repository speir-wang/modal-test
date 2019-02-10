import React, { Component } from "react";
import TaskItem from "./TaskItem";
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
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
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
			],
			name: "",
			email: ""
		};
	}
	handleNameChange(e) {
		console.log(e.target.value);
		this.setState({
			name: e.target.value
		});
	}
	handleEmailChange(e) {
		console.log(e.target.value);
		this.setState({
			email: e.target.value
		});
	}
	renderTaskList() {
		return this.state.taskList.map(task => {
			return <TaskItem task={task} key={task.ID} />;
		});
	}
	render() {
		return (
			<div className="modal-container">
				<ModalHeader closeModal={this.props.onCloseModal} />
				<div className="modal-content">
					<section className="modal-content-left">{this.renderTaskList()}</section>
					<section className="modal-content-right">
						<div className="input-field">
							<label htmlFor="name">Name</label>
							<input
								placeholder="First and Last name..."
								value={this.state.name}
								type="text"
								id="name"
								onChange={this.handleNameChange}
							/>
						</div>
						<div className="input-field">
							<label htmlFor="email">Email</label>
							<input placeholder="Work email..." value={this.state.email} type="email" id="email" onChange={this.handleEmailChange} />
						</div>
					</section>
				</div>
				<ModalFooter closeModal={this.props.onCloseModal} />
			</div>
		);
	}
}

export default Modal;
