import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import toJson from "enzyme-to-json";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "New text";
  wrapper.find("input").simulate("change", { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
test("should sort by amount", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});
test("should sort by date", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalledTimes(1);
});

test("should handle date changes", () => {
  const startDate = moment(0);
  const endDate = moment(0).add(3, "days");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle focus changes", () => {
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")("endDate");
  expect(wrapper.state("calendarFocused")).toEqual("endDate");
});
