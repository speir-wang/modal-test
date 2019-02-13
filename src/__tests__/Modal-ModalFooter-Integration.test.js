import React from "react";
import App from "../components/App";
import Modal from "../components/Modal";
import ModalFooter from "../components/ModalFooter";
import { shallow, mount } from "enzyme";

let appWrapper, modalWrapper, modalFooterWrapper;

beforeEach(() => {
	appWrapper = shallow(<App />);
	modalWrapper = shallow(<Modal />);
	modalFooterWrapper = shallow(<ModalFooter />);
});

it("should close the <Modal /> when the cancel button is clicked in the <ModalFooter />", () => {
	modalFooterWrapper = shallow(<ModalFooter closeModal={appWrapper.instance().closeModal} />);

	appWrapper.find("button").simulate("click");
	expect(appWrapper.find(Modal).length).toBe(1);

	modalFooterWrapper.find("button.cancel").simulate("click");
	expect(appWrapper.find(Modal).length).toBe(0);
});

it("should remove is-inactive class on Save Changes button when both fields are filled no matter the input are valid or not", () => {
	modalWrapper.find("#name").simulate("change", { target: { value: "Test" } });
	modalWrapper.find("#email").simulate("change", { target: { value: "speir.wang@gmail.com" } });
	expect(modalFooterWrapper.find("button.save").hasClass("is-inactive")).toBeFalsy();
});

it("should give invalid email input an invalid class when both fields are filled and user click the Save Changes button", () => {
	let newModalWrapper = mount(<Modal />);
	let newModalFooterWrapper = mount(<ModalFooter submitForm={newModalWrapper.instance().submitForm} />);
	newModalWrapper.find("#name").simulate("change", { target: { value: "Test" } });
	newModalWrapper.find("#email").simulate("change", { target: { value: "INVALID EMAIL ADDRESS" } });
	newModalFooterWrapper.find("button.save").simulate("click");
	// I used React.createRef() to add class for email input, somehow enzyme doesn't support ref really well, this test case is not practical, probably React.createRef() is not a good practice as well.
	expect(newModalWrapper.instance().emailInput.current.classList[0]).toBe("invalid");
	// theoretically, we should write something like below:
	// expect(newModalWrapper.find("input#email").hasClass("invalid")).toBeTruthy();
	// Surprisingly the return of newModalWrapper.find("input#email") doesn't contain any classes at all.
});

it("should close Modal if input fields pass the validation", () => {
	let newModalWrapper = mount(<Modal onCloseModal={appWrapper.instance().closeModal} />);
	modalFooterWrapper = shallow(<ModalFooter submitForm={newModalWrapper.instance().submitForm} />);

	newModalWrapper.find("#name").simulate("change", { target: { value: "Test" } });
	newModalWrapper.find("#email").simulate("change", { target: { value: "speir.wang@gmail.com" } });
	modalFooterWrapper.find("button.save").simulate("click");

	expect(appWrapper.find(Modal).length).toBe(0);
});
