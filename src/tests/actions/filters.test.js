import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";
import moment from "moment";

test("testing set text filter action with text input", () => {
  const action = setTextFilter("hey");
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "hey" });
});

test("testing set text filter action with no input", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("testing sort by amount action", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("testing sort by date action", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("testing setting start date action", () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate,
  });
});

test("testing setting end date action", () => {
  const endDate = moment(0);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});
