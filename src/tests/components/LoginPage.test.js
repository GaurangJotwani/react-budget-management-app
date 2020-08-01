import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { LoginPage } from "../../components/LoginPage";

test("should render Login Page", () => {
  const wrapper = shallow(<LoginPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should call startLogin on button click", () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={onClickSpy} />);
  wrapper.find("button").simulate("click", {});
  expect(onClickSpy).toHaveBeenCalled();
});
