import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";
import toJson from "enzyme-to-json";

test("should render Notfound Page", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
