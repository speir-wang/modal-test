import React, { Component } from "react";

class ModalHeader extends Component {
	render() {
		return (
			<div className="modal-header">
				<section className="left">
					<span className="current-widget">Current Widgets</span>
					<span className="add-widget">Add Widget</span>
				</section>
				<section className="right">
					<span>X</span>
				</section>
			</div>
		);
	}
}

export default ModalHeader;
