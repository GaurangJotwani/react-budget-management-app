import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import expenses from "../fixtures/expenses";

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
