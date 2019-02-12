// setup file
import React from "react";
import App from "../components/App";
import Modal from "../components/Modal";
import { shallow } from "enzyme";

let appWrapper;
beforeEach(() => {
	appWrapper = shallow(<App />);
});

it("first render should not have <Modal />", () => {
	expect(appWrapper.find(Modal).length).toBe(0);
});

it("should have <Modal /> when the state modalIsOpen is set to true", () => {
	appWrapper.setState({ modalIsOpen: true });
	expect(appWrapper.find(Modal).length).toBe(1);
});
