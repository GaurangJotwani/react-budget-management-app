import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup defualt values", () => {
  const state = filtersReducer(undefined, { TYPE: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter to the given text", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "hey",
  });
  expect(state.text).toBe("hey");
});

test("should set start date to the given date", () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate,
  });
  expect(state.startDate).toEqual(startDate);
});

test("should set end date to the given date", () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate,
  });
  expect(state.endDate).toEqual(endDate);
});
