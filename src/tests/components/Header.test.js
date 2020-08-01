import React from "react";
import { Header } from "../../components/Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("should render header correctly", () => {
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header startLogout={() => {}} />);
  //   expect(wrapper.find("h1").text()).toBe("Expensify");
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onClickSpy} />);
  wrapper.find("button").simulate("click", {});
  expect(onClickSpy).toHaveBeenCalled();
});
