import React from "react";
import App from "../components/App";
import Modal from "../components/Modal";
import ModalHeader from "../components/ModalHeader";
import { shallow } from "enzyme";

it("should close the <Modal /> when the close button is clicked in the <ModalHeader />", () => {
	let appWrapper, modalHeaderWrapper;
	appWrapper = shallow(<App />);
	modalHeaderWrapper = shallow(<ModalHeader closeModal={appWrapper.instance().closeModal} />);

	appWrapper.find("button").simulate("click");
	expect(appWrapper.find(Modal).length).toBe(1);

	modalHeaderWrapper.find("button.close-button").simulate("click");
	expect(appWrapper.find(Modal).length).toBe(0);
});
