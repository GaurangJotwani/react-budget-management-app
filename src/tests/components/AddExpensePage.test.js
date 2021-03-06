import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test("should render AddExpense page correctly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should handle on Submit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});
