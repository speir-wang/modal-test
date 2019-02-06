import React, { Component } from "react";
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
	}
	openModal = () => {
		this.setState({
			modalIsOpen: true
		});
	};
	render() {
		return (
			<div>
				<button onClick={this.openModal}>Show Modal</button>
				{this.state.modalIsOpen && <Modal />}
			</div>
		);
	}
}

export default App;
