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
				<button className={`save ${this.props.checkFieldsEmpty === true ? "is-inactive" : ""}`} onClick={this.props.submitForm}>
					Save Changes
				</button>
			</div>
		);
	}
}

export default ModalFooter;
