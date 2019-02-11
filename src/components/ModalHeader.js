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
					<button className="close-button" onClick={this.props.closeModal}>
						<svg width="24" height="24" viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path
								fill="#CFD3D6"
								d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
							/>
						</svg>
					</button>
				</section>
			</div>
		);
	}
}

export default ModalHeader;
