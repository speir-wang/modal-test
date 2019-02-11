import React, { Component } from "react";
import "../scss/App.scss";
import Modal from "./Modal";

/**
 * Modal structure: header -> body -> footer
 *
 * Modal body:
 *  left: <TastList>
 *  right: <UserInput>
 */

class App extends Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal = () => {
		this.setState({
			modalIsOpen: true
		});
	};

	closeModal = () => {
		this.setState({
			modalIsOpen: false
		});
	};
	render() {
		return (
			<div>
				<button onClick={this.openModal}>Show Modal</button>
				{/* conditionally render the modal based on state */}
				{this.state.modalIsOpen && <Modal onCloseModal={this.closeModal} />}
			</div>
		);
	}
}

export default App;
