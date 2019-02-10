import React, { Component } from "react";

class ModalFooter extends Component {
	render() {
		return (
			<div className="modal-footer">
				<button className="cancel">Cancel</button>
				<button className="save">Save Changes</button>
			</div>
		);
	}
}

export default ModalFooter;
