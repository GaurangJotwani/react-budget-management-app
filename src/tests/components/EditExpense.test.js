import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper, match;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: "1" } };
  wrapper = shallow(
    <EditExpensePage
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
      match={match}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  const wrapper = <EditExpensePage />;
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("should handle remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
