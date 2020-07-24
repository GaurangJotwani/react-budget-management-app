import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import toJson from "enzyme-to-json";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should  render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "New Description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on text area change", () => {
  const value = "New Note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should set amount if valid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "22.50";
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "22.5012";
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("should set new Date on date change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set Calender Focused on focus change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
    focused: true,
  });
  expect(wrapper.state("calendarFocused")).toEqual(true);
});
