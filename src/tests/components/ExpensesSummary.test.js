import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import toJson from "enzyme-to-json";

test("should render ExpensesSummary with empty message", () => {
  const wrapper = shallow(<ExpensesSummary count={0} total={0} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary count={1} total={94.34} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render ExpensesSummary with expenses", () => {
  const wrapper = shallow(<ExpensesSummary count={2} total={94.34} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
