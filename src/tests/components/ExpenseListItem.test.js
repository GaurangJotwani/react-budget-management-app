import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItem for the given expense", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
