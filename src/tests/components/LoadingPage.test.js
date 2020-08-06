import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoadingPage from "../../components/LoadingPage";

test("should render Login Page", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
