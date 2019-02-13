import React from "react";
import App from "../components/App";
import Modal from "../components/Modal";
import ModalFooter from "../components/ModalFooter";
import { shallow } from "enzyme";

it("should close the <Modal /> when the cancel button is clicked in the <ModalFooter />", () => {
	let appWrapper, modalFooterWrapper;
	appWrapper = shallow(<App />);
	modalFooterWrapper = shallow(<ModalFooter closeModal={appWrapper.instance().closeModal} />);

	appWrapper.find("button").simulate("click");
	expect(appWrapper.find(Modal).length).toBe(1);

	modalFooterWrapper.find("button.cancel").simulate("click");
	expect(appWrapper.find(Modal).length).toBe(0);
});
