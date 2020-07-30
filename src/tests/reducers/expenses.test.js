import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: "2" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id is wrong", () => {
  const action = { type: "REMOVE_EXPENSE", id: "10" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expenses to the state", () => {
  const expense = {
    id: "4",
    description: "Credit Card",
    note: "",
    amount: 0,
    createdAt: moment(0).add(4, "days").valueOf(),
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense for the given id", () => {
  const updates = {
    note: "This is a new note",
    amount: 30000,
    description: "milk",
  };
  const action = { type: "EDIT_EXPENSE", updates, id: "3" };
  const state = expensesReducer(expenses, action);
  expect(state[2]).toEqual({ ...expenses[2], ...updates });
});

test("should not edit expense for wrong id", () => {
  const updates = {
    note: "This is a new note",
    amount: 30000,
    description: "milk",
    createdAt: 0,
  };
  const action = { type: "EDIT_EXPENSE", updates, id: "10" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = { type: "SET_EXPENSES", expenses: expenses[1] };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses[1]);
});
