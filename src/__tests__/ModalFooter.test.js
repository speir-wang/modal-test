import React from "react";
import ModalFooter from "../components/ModalFooter";
import { shallow } from "enzyme";

let modalFooterWrapper;
beforeEach(() => {
	modalFooterWrapper = shallow(<ModalFooter checkFieldsEmpty={true} />);
});

it("save change button in the initial render should have is-inactive class", () => {
	expect(modalFooterWrapper.find("button.save").hasClass("is-inactive")).toBeTruthy();
});
