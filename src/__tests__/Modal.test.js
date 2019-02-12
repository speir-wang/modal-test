import React from "react";
import App from "../components/App";
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

it("should update state.name when name input field has value", () => {
	modalWrapper.find("#name").simulate("change", { target: { value: "Test" } });
	expect(modalWrapper.find("#name").props().value).toBe("Test");
});
