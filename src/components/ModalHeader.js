import React, { Component } from "react";

class ModalHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="modal-header">
				<section className="left">
					<span className="current-widget">Current Widgets</span>
					<span className="add-widget">Add Widget</span>
				</section>
				<section className="right">
					<button onClick={this.props.closeModal}>X</button>
				</section>
			</div>
		);
	}
}

export default ModalHeader;
