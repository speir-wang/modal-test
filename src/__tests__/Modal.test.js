import React from "react";
import Modal from "../components/Modal";
import TaskItem from "../components/TaskItem";
import { shallow } from "enzyme";

let modalWrapper;
beforeEach(() => {
	modalWrapper = shallow(<Modal />);
});

it("should have 3 <TaskItem /> component inside Modal", () => {
	expect(modalWrapper.find(TaskItem).length).toBe(3);
});

it("method checkEmpty() should return true in the initial render", () => {
	expect(modalWrapper.instance().checkFieldsEmpty()).toBeTruthy();
});

it("should update state.name when name input field has value", () => {
	modalWrapper.find("#name").simulate("change", { target: { value: "Test" } });
	expect(modalWrapper.find("#name").props().value).toBe("Test");
});

it("should update state.email when email input field has value", () => {
	modalWrapper.find("#email").simulate("change", { target: { value: "speir.wang@gmail.com" } });
	expect(modalWrapper.find("#email").props().value).toBe("speir.wang@gmail.com");
});
