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
	render() {
		return (
			<div>
				<button>Show Modal</button>
				<div className="modal-contaner">
					<Modal />
				</div>
			</div>
		);
	}
}

export default App;
