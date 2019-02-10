import React, { Component } from "react";

class ModalFooter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="modal-footer">
				<button className="cancel" onClick={this.props.closeModal}>
					Cancel
				</button>
				<button className="save" onClick={this.submitForm}>
					Save Changes
				</button>
			</div>
		);
	}
}

export default ModalFooter;
